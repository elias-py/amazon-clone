import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
	return (
		<div className="home">
			<img className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt=""
			/>
			<div className="home__row">
				<Product 
				id="1"
				title="Introduction to Algorithms, 3rd Edition (The MIT Press) (Inglés) 3rd Edición"
				price={11.96}
				rating={5}
				image="https://images-na.ssl-images-amazon.com/images/I/41T0iBxY8FL._SX258_BO1,204,203,200_.jpg"/>
				<Product 
				id="123"
				title="Introduction to Algorithms, 3rd Edition (The MIT Press) (Inglés) 3rd Edición"
				price={11.96}
				rating={5}
				image="https://images-na.ssl-images-amazon.com/images/I/41T0iBxY8FL._SX258_BO1,204,203,200_.jpg"/>
			</div>

			<div className="home__row">
				<Product 
				id="2"
				title="Cracking the Coding Interview: 189 Programming Questions and Solutions (Inglés) 6th Edición"
				price={29.00}
				rating={4}
				image="https://images-na.ssl-images-amazon.com/images/I/51l5XzLln+L._SX348_BO1,204,203,200_.jpg"/>
				<Product 
				id="123"
				title="Introduction to Algorithms, 3rd Edition (The MIT Press) (Inglés) 3rd Edición"
				price={11.96}
				rating={5}
				image="https://images-na.ssl-images-amazon.com/images/I/41T0iBxY8FL._SX258_BO1,204,203,200_.jpg"/>
				<Product 
				id="123"
				title="Introduction to Algorithms, 3rd Edition (The MIT Press) (Inglés) 3rd Edición"
				price={11.96}
				rating={5}
				image="https://images-na.ssl-images-amazon.com/images/I/41T0iBxY8FL._SX258_BO1,204,203,200_.jpg"/>
			</div>
		</div>
	)
}

export default Home