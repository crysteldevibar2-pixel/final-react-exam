'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import ProductList from '../components/ProductList';
import ProductModal from '../components/ProductModal';

import { useGlobalCart } from '../app/state/useGlobalCartContext';

export default function HomePage() {
  // Use the global hook as the source of truth for cart data and functions
  const { 
    products, 
    cart, 
    handleUpdateCart, 
    overallTotal, 
    totalCartItems 
  } = useGlobalCart();

  // State local to HomePage (Product viewing/filtering)
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductDetails = () => { 
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (selectedCategory !== 'All') {
        setSelectedCategory('All');
    }
  }, [products.length]); 

  // Req 1: Filter the product list (remains local)
  	const filteredProducts = useMemo(() => {
    // 1. Convert search term to lowercase for case-insensitive matching
    const lowerCaseSearch = searchTerm.toLowerCase();

    // 2. Apply Category Filter
    const categoryFiltered = (selectedCategory === 'All')
      ? products
      : products.filter(product => product.category === selectedCategory);

    // 3. Apply Search Term Filter
    if (!lowerCaseSearch) {
        return categoryFiltered; // Return only category-filtered products if search is empty
    }

    return categoryFiltered.filter(product => 
        // Search by product name OR description
        product.name.toLowerCase().includes(lowerCaseSearch) ||
        product.description.toLowerCase().includes(lowerCaseSearch)
    );
  }, [products, selectedCategory, searchTerm]);
	
	return (
		<>
			<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
				<div className="container mx-auto p-6 max-w-7xl pb-32">
					{/* Enhanced Header with Gradient */}
					<div className="relative mb-8 mt-4">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20"></div>
						<div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
							<h1 className="text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
								Product Management
							</h1>
							<p className="text-gray-600 text-lg font-medium">Discover and manage your inventory with ease</p>
						</div>
					</div>

					{/* Product List Component */}
					<ProductList
						products={filteredProducts}
						cart={cart}
						onUpdateCart={handleUpdateCart}
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
						onOpenProductDetails={handleOpenProductDetails}
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>

					{/* Enhanced Inventory Management Card */}
					<div className="relative mt-8 group">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
						<div className="relative bg-white rounded-2xl shadow-lg p-8 border-2 border-dashed border-gray-200 hover:border-blue-300 transition-all">
							<div className="flex items-center justify-center mb-4">
								<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
									</svg>
								</div>
							</div>
							<h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Inventory Management</h3>
							<p className="text-gray-600 mb-6 text-center text-lg">Expand your product catalog with new items</p>
							<div className="flex justify-center">
								<Link 
									href="/add-product" 
									className="inline-flex items-center gap-2 py-4 px-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
									</svg>
									Add New Product
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Enhanced Fixed Bottom Cart Bar */}
				<div className="fixed bottom-0 left-0 right-0 z-50">
					<div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t-4 border-blue-500 shadow-2xl backdrop-blur-sm">
						<div className="container mx-auto p-5 max-w-7xl">
							<div className="flex justify-between items-center">
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
										</svg>
									</div>
									<div>
										<p className="text-gray-400 text-sm font-medium">Cart Total</p>
										<h2 className="text-3xl font-black text-white">
											<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
												${overallTotal.toFixed(2)}
											</span>
											<span className="text-lg text-gray-400 ml-3 font-normal">
												({totalCartItems} {totalCartItems === 1 ? 'Item' : 'Items'})
											</span>
										</h2>
									</div>
								</div>

								{/* Enhanced Checkout Button */}
								<Link 
									href="/cart" 
									className={`relative py-4 px-10 font-bold rounded-xl shadow-xl transition-all duration-200 overflow-hidden group ${
										totalCartItems > 0 
											? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:scale-105' 
											: 'bg-gray-700 text-gray-400 cursor-not-allowed'
									}`}>
									{totalCartItems > 0 && (
										<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
									)}
									<span className="relative flex items-center gap-2 text-lg">
										{totalCartItems > 0 ? (
											<>
												<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
												</svg>
												Proceed to Checkout
											</>
										) : (
											<>
												<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
												</svg>
												Cart Empty
											</>
										)}
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* RENDER PRODUCT MODAL AS A SIBLING */}
			{selectedProduct && (
				<ProductModal 
					product={selectedProduct} 
					onClose={handleCloseProductDetails} 
				/>
			)}
		</>
	);
}
