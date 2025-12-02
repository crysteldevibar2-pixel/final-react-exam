// cart/page.js
'use client';

import { useMemo } from 'react';
import Link from 'next/link';
// Import the shared state hook
import { useGlobalCart } from '../state/useGlobalCartContext'; 

// Sub-component for a single cart item (stays the same)
const CartItem = ({ item, onUpdateCart }) => {
	// subtotal is now passed in via item.subtotal
	const { id, name, price, cartQuantity, subtotal, image, stockLevel } = item;
	
	const handleQuantityChange = (change) => {
		const newQuantity = cartQuantity + change;
		
		if (newQuantity >= 0 && newQuantity <= stockLevel) {
			onUpdateCart(id, newQuantity);
		}
	};
	
	return (
		<div className="group relative bg-white p-5 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-purple-200">
			<div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
			
			<div className="flex items-center gap-5">
				{/* Image */}
				<div className="w-28 h-28 shrink-0 rounded-xl overflow-hidden shadow-md ring-2 ring-gray-100 group-hover:ring-purple-200 transition-all">
					<img 
						src={image} 
						alt={name} 
						className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
						onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/112x112/dddddd/333333?text=Product"; }}
					/>
				</div>

				{/* Details and Price */}
				<div className="grow">
					<Link href={`/product/${id}`} legacyBehavior>
						<a className="text-xl font-bold text-gray-800 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all">
							{name}
						</a>
					</Link>
					<div className="flex items-center gap-2 mt-2">
						<span className="text-sm text-gray-500 font-medium">Unit Price:</span>
						<span className="text-lg font-semibold text-gray-700">${price.toFixed(2)}</span>
					</div>
					{stockLevel < 5 && (
						<div className="flex items-center gap-2 mt-2 bg-orange-50 px-3 py-1.5 rounded-lg w-fit">
							<svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
							</svg>
							<span className="text-xs text-orange-600 font-semibold">Only {stockLevel} left!</span>
						</div>
					)}
				</div>

				{/* Quantity Controls and Subtotal */}
				<div className="flex items-center gap-6">
					<div className="flex items-center bg-gray-50 rounded-xl shadow-sm border border-gray-200">
						<button 
							onClick={() => handleQuantityChange(-1)} 
							className="p-3 hover:bg-gradient-to-br hover:from-red-50 hover:to-pink-50 rounded-l-xl text-xl font-bold text-gray-700 hover:text-red-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
							disabled={cartQuantity <= 0}
						>
							−
						</button>
						<span className="px-5 text-xl font-bold text-gray-800 border-l border-r border-gray-200 min-w-[60px] text-center">
							{cartQuantity}
						</span>
						<button 
							onClick={() => handleQuantityChange(1)} 
							className={`p-3 rounded-r-xl text-xl font-bold transition-all ${
								cartQuantity >= stockLevel 
									? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
									: 'text-gray-700 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 hover:text-green-600'
							}`}
							disabled={cartQuantity >= stockLevel}
						>
							+
						</button>
					</div>
					
					<div className="text-right min-w-[120px]">
						<p className="text-2xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
							${subtotal.toFixed(2)}
						</p>
						<button 
							onClick={() => onUpdateCart(id, 0)} 
							className="text-sm text-gray-500 hover:text-red-600 mt-2 font-medium hover:underline transition-colors flex items-center gap-1 ml-auto"
						>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
							</svg>
							Remove
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};


export default function CartPage() {
	// Replaced useMockCartState with useGlobalCart
	const { 
		cartItemsData: cartItems, // Use the pre-computed cart items list
		handleUpdateCart, 
		overallTotal, // Total is computed in the hook
		totalCartItems 
	} = useGlobalCart(); // This hook now holds the actual user's cart state


	const handleCheckout = () => {
		alert("Proceeding to Checkout! Total: $" + overallTotal.toFixed(2));
	};
	
	if (totalCartItems === 0) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-8">
				<div className="text-center max-w-2xl">
					<div className="relative mb-8">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
						<div className="relative w-48 h-48 mx-auto bg-white rounded-full shadow-2xl flex items-center justify-center">
							<svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
							</svg>
						</div>
					</div>
					
					<h1 className="text-5xl font-black text-gray-800 mb-4">Your Cart is Empty</h1>
					<p className="text-xl text-gray-600 mb-10">Looks like you haven't added anything to your cart yet. Start exploring!</p>
					
					<Link href="/" legacyBehavior>
						<a className="inline-flex items-center gap-3 py-4 px-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
							</svg>
							Start Shopping
						</a>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8">
			<div className="container mx-auto p-6 max-w-7xl">
				{/* Enhanced Header */}
				<div className="mb-10">
					<div className="flex items-center gap-4 mb-2">
						<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
							<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</div>
						<h1 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Shopping Cart
						</h1>
					</div>
					<p className="text-xl text-gray-600 ml-16">
						<span className="font-bold text-gray-800">{totalCartItems}</span> {totalCartItems === 1 ? 'Item' : 'Items'} in your cart
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-5">
						{cartItems.map(item => (
							<CartItem key={item.id} item={item} onUpdateCart={handleUpdateCart} />
						))}
						
						<Link href="/" legacyBehavior>
							<a className="inline-flex items-center gap-2 mt-6 text-blue-600 hover:text-purple-600 font-semibold text-lg group transition-colors">
								<svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
								</svg>
								Continue Shopping
							</a>
						</Link>
					</div>

					{/* Enhanced Summary/Checkout Panel */}
					<div className="lg:col-span-1 h-fit sticky top-8">
						<div className="relative group">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
							<div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
								<h2 className="text-3xl font-black text-gray-800 mb-6 pb-4 border-b-2 border-gray-100">
									Order Summary
								</h2>
								
								<div className="space-y-5 text-lg">
									<div className="flex justify-between items-center">
										<span className="text-gray-600 font-medium">
											Subtotal ({totalCartItems} {totalCartItems === 1 ? 'item' : 'items'})
										</span>
										<span className="text-xl font-bold text-gray-800">${overallTotal.toFixed(2)}</span>
									</div>
									
									<div className="flex justify-between items-center">
										<span className="text-gray-600 font-medium">Shipping</span>
										<div className="flex items-center gap-2">
											<svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
											</svg>
											<span className="text-green-600 font-bold">FREE</span>
										</div>
									</div>
									
									<div className="flex justify-between items-center pt-6 mt-6 border-t-2 border-dashed border-gray-200">
										<span className="text-xl font-bold text-gray-800">Total</span>
										<span className="text-3xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
											${overallTotal.toFixed(2)}
										</span>
									</div>
									
									<p className="text-sm text-gray-500 text-center pt-2">Including VAT</p>
								</div>
								
								<button 
									onClick={handleCheckout}
									className="w-full mt-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-3 group"
								>
									<span>Proceed to Checkout</span>
									<svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</button>
								
								<div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
									<div className="flex items-center gap-2">
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
										</svg>
										<span>Secure Checkout</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}