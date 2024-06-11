import Image from "next/image";
import Header from "@/app/components/header";
import UnderHeader from "@/app/components/underheader";
import Search from "@/app/components/search";
import Footer from "@/app/components/foter";
import Pending from "@/app/components/pending";
import Whybuy from "@/app/components/whybuy";
export default function Home() {



    return (<div>


<Header></Header>
          <h1 className="text-3xl ">
              <UnderHeader/>
              <Search/>
              <Pending/>
<Whybuy/>
             <Footer/>

          </h1>
      </div>
  );
}
