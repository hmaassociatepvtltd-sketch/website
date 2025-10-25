import {HeroSection} from "@/components/LandingPage/HeroSection";
import {OurPartners} from "@/components/LandingPage/OurPartners";
import {Products} from "@/components/LandingPage/Products";
import {ContactForm} from "@/components/LandingPage/ContactForm";
import {Testimonials} from "@/components/LandingPage/Testimonials";
import {About} from "@/components/LandingPage/About";
import {Container} from "@/components/LandingPage/Container";

export default function Home() {
  return (
    <div className={"w-full relative h-full"}>
        <HeroSection image={"/assets/hero.png"} heading={"Pakistan's Leading Solar Company"} text={"HMA Associates is a leading solar company in Pakistan, providing innovative and cost-effective solutions for residential and commercial clients."} button={"Contact Us"} link={"/contact"} />
        <Container subHeading={'HMA Associates & Co.'} heading={'Complete Solar Systems for Offices & Industries'} text={'Welcome to HMA Associates & Co., a trusted leader in providing quality solutions for Construction Sector, Solar Energy, Real Estate Business, Accounting and Tax Consultancy. We take great pride in our attention to detail and the quality of our services, ensuring that each customer receives highest satisfaction from our services. We look forward to working together to reach your business goals.'} button={'Learn More'} link={'/about'}  image={'https://aptinverex.com/assets/img/update1/normal/why_7.png'} directtion={'right'}/>
        <Products/>
        <OurPartners/><Testimonials/>
        <Container subHeading={"Why Choose Us"} image={"https://aptinverex.com/assets/img/update1/normal/why_7.png"} heading={"Pakistan's Leading Solar Company"} text={"HMA Associates is a leading solar company in Pakistan, providing innovative and cost-effective solutions for residential and commercial clients. HMA Associates is a leading solar company in Pakistan, providing innovative and cost-effective solutions for residential and commercial clients. HMA Associates is a leading solar company in Pakistan, providing innovative and cost-effective solutions for residential and commercial clients."}  directtion={'left'}/>
        <Container subHeading={"Why Choose Us"} image={"https://aptinverex.com/assets/img/update1/normal/why_7.png"} heading={"Pakistan's Leading Solar Company"} text={"HMA Associates is a leading solar company in Pakistan, providing innovative and cost-effective solutions for residential and commercial clients. HMA Associates is a leading solar company in Pakistan, providing innovative and cost-effective solutions for residential and commercial clients. HMA Associates is a leading solar company in Pakistan, providing innovative and cost-effective solutions for residential and commercial clients."} button={"Contact Us"} link={"/contact"} directtion={'right'}/>

        <ContactForm/>
    </div>
  );
}
