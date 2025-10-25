import {HeroSection} from "@/components/LandingPage/HeroSection";
import {Container} from "@/components/LandingPage/Container";
import {Testimonials} from "@/components/LandingPage/Testimonials";
import {OurPartners} from "@/components/LandingPage/OurPartners";
import {AllWorks} from "@/components/LandingPage/About/AllWorks";
import {ContactForm} from "@/components/LandingPage/ContactForm";


export default function About() {
  return (
    <div className={"w-full relative h-full"}>
       <HeroSection heading={'Our Work'} text={'HMA Associates is a leading solar company in Pakistan, providing innovative and cost-effective solutions for residential and commercial clients.'} />
        <Container image={'https://www.hmago.com/wp-content/uploads/2023/08/0502c8cf-7b6a-457d-a284-0b6b96ceb4bb_11zon.jpg'} directtion={'left'} subHeading={'SOLAR TECHNOLOGY'} heading={'Our Mission'} text={'At HMA Associates & Co., we believe in a better future for all. That’s why we’re committed to providing sustainable, innovative solutions that help our clients achieve their goals while protecting the environment. With a focus on excellence and a passion for innovation, we’re dedicated to delivering exceptional results that exceed our clients’ expectations.'}/>
        <Container subHeading={'Our Work'} heading={'Check out our recent work'} />
        <AllWorks/>
        <OurPartners/>
        <Testimonials/>
        <ContactForm/>
    </div>
  );
}
