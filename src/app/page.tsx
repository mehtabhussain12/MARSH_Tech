import Image from "next/image";
import About from "./(components)/About";
import Cards from "./(components)/Cards";
import Form from "./(components)/Form";
import Skills from "./(components)/Skills";
import Footer from "./(components)/Footer";
import FaqItem from "./(components)/FAQ";
import Why from "./(components)/Why";


export default function Home() {
  return (
  <>
  <h1>Hello</h1>
 
  <Cards/>
  <About/>
  <Skills/>
  <Why/>
  <Form/>
  <FaqItem/>
  <Footer/>
 
  </>
  )};