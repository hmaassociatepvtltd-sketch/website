import {HeroSection} from "@/components/LandingPage/HeroSection";
import {Container} from "@/components/LandingPage/Container";
import {Testimonials} from "@/components/LandingPage/Testimonials";
import {OurPartners} from "@/components/LandingPage/OurPartners";


export default function About() {
  return (
    <div className={"w-full relative h-full"}>
       <HeroSection heading={'About Us'} text={'HMA Associates is a leading solar company in Pakistan, providing innovative and cost-effective solutions for residential and commercial clients.'} />
        <Container image={'https://www.hmago.com/wp-content/uploads/2023/08/d9c4ea58-f6dc-421b-91c7-c34fb4819cc6-removebg-preview-1.png'} directtion={'right'} subHeading={'HMA ASSOCIATES & CO'} heading={'Who We Are?'} text={'At HMA ASSOCIATES & CO., we are committed to delivering innovative and effective solutions for our clients. We have a proven track record of success in various domains, such as Solar Energy, Construction Sector, and Real Estate Business. Our team of experts has the skills, experience, and passion to create solutions that meet the needs and expectations of our customers. Whether it is a simple or complex project, we are ready to take on any challenge and provide the best possible outcome. We are not just a solution provider, we are a solution partner. We work closely with our clients to understand their goals, challenges, and opportunities, and tailor our solutions accordingly. We also offer ongoing support and maintenance to ensure the quality and performance of our solutions. Our mission is to help our clients achieve their objectives and grow their business with our solutions. We are HMA ASSOCIATES & CO., the leading provider in solutions.'}/>
        <Container image={'https://www.hmago.com/wp-content/uploads/2023/08/slider-page-1-2_11zon-1024x512.jpg'} directtion={'left'} subHeading={'SOLAR TECHNOLOGY'} heading={'Our Mission'} text={'At HMA Associates & Co., we believe in a better future for all. That’s why we’re committed to providing sustainable, innovative solutions that help our clients achieve their goals while protecting the environment. With a focus on excellence and a passion for innovation, we’re dedicated to delivering exceptional results that exceed our clients’ expectations.'}/>
        <OurPartners/>
        <Testimonials/>
    </div>
  );
}
