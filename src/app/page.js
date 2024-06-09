import Image from "next/image";
import Header from "@/app/components/header";
import UnderHeader from "@/app/components/underheader";
import Search from "@/app/components/search";
import Footer from "@/app/components/foter";
export default function Home() {



    return (<div>


<Header></Header>
          <h1 className="text-3xl ">
              <UnderHeader/>
              <Search/>
             <Footer/>

          </h1>
      </div>
  );
}
