
import { Bold } from "lucide-react";
import { getTranslations } from "next-intl/server"
export default async function PrivacyPolicy()
{
    const t = await getTranslations("privacy");
    return(<>

    
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-5xl mx-auto">
      
      <aside className="md:w-1/4 flex-shrink-0">
        <h2 className="text-xl font-semibold mb-4">{t("menu")}</h2>
        <ul className="space-y-2 text-gray-600">
          <li><a href="#introduction" className="hover:underline">{t("intro")}</a></li>
          <li><a href="#collection" className="hover:underline">{t("datacoll")}</a></li>
          <li><a href="#security" className="hover:underline">{t("datasecurity")}</a></li>
          <li><a href="#usage" className="hover:underline">{t("usedata")}</a></li>
          <li><a href="#rights" className="hover:underline">{t("rights")}</a></li>
          <li><a href="#hosting" className="hover:underline">{t("hosting")}</a></li>
          <li><a href="#order" className="hover:underline">{t("order")}</a></li>
          <li><a href="#impressum" className="hover:underline">{t("impressum")}</a></li>
           

        </ul>
      </aside>

      <main className="flex-1">
        <h1 className="text-2xl font-bold mb-6">{t("title")}</h1>
        
        <section id="introduction" className="mb-6 gap-2">
          <h2 className="text-xl font-semibold mb-2">{t("intro")}</h2>
          <p className="text-gray-700">
            {t("introdescription")}
          </p>
        </section>

        <section id="collection" className="mb-6 gap-2">
          <h2 className="text-xl font-semibold mb-2">{t("title2")}</h2>
          <p className="text-gray-700">
            {t("approach")}
          </p>
          <ol className="gap-2">
            <li className="text-gray-700"><span className="text-lg text-gray-900">{t("listitem1")}</span> {t("listitem1desc")}</li> 
            <li className="text-gray-700"><span className="text-lg text-gray-900">{t("listitem2")}</span> {t("listitem2desc")}</li>
             <li className="text-gray-700"><span className="text-lg text-gray-900">{t("contanctlist")}</span> {t("cosent")}</li>
          </ol>
        </section>

        <section id="security" className="mb-6 gap-2">
          <h2 className="text-xl font-semibold mb-2">{t("datasecurity")}</h2>
          <p className="text-gray-700">
           {t("datasecuritydesc")}
          </p>
            <ol className="gap-2">
            <li className="text-gray-700">{t("listitem3")}</li> 
            <li className="text-gray-700"> {t("listitem4")}</li>
            <li className="text-gray-700"> {t("listitem5")}</li>
          </ol>
          

        </section>

        <section id="usage" className="mb-6 gap-2">
          <h2 className="text-xl font-semibold mb-2">{t("usedata")}</h2>
          <p className="text-gray-700">
           {t("usedatadesc")}
           
          </p>
             <ol className="gap-2">
            <li className="text-gray-700">{t("listitem6")}</li> 
            <li className="text-gray-700"> {t("listitem7")}</li>
            <li className="text-gray-700"> {t("listitem8")}</li>
            <li className="text-gray-700"> {t("listitem9")}</li>
          </ol>
          <p className="text-gray-700 gap-2">
            {t("usedatadesc2")}
          </p>


        
           <p className="text-gray-700 gap-2 top-1 ">{t("usedatadesc3")}</p>
           <p className="text-gray-700 gap-2 top-2 ">{t("usedatadesc4")}</p>

        </section>

        <section id="rights" className="mb-6 gap-2">
          <h2 className="text-xl font-semibold mb-2">{t("rights")}</h2>
          <p className="text-gray-700">
           {t("rightstitle")}
           
          </p>
             <ol className="gap-2">
            <li className="text-gray-700">{t("rightsdesc")}</li> 
            <li className="text-gray-700"> {t("rightsappend")}</li>
           
          </ol>
        

        </section>


         <section id="hosting" className="mb-6 gap-2">
          <h2 className="text-xl font-semibold mb-2">{t("hosting")}</h2>
          <p className="text-gray-700">
           {t("hostingtitle")}
           
          </p>
          <p className="text-gray-700">{t("hostingprovider")}</p>
          <p className="text-gray-700">{t("hostingcatalog")}</p>
           <p className="text-gray-700">{t("hostingaddress")}</p>
            <p className="text-gray-700">{t("hostinghpone")}</p>
             <p className="text-gray-700">{t("hostingmail")}</p>
             <p className="text-gray-700">{t("hostingdesc")}</p>
        

        </section>




          <section id="order" className="mb-6 gap-2">
          <h2 className="text-xl font-semibold mb-2">{t("order")}</h2>
          <p className="text-gray-700">
           {t("hostingtitle")}
           
          </p>
          <p className="text-gray-700">{t("orderdesc")}</p>
         
        

        </section>

         <section id="impressum" className="mb-6 gap-2">
          <h2 className="text-xl font-semibold mb-2">{t("impressum")}</h2>
          <h3 className="fond-semibold mb-2">{t("impressumtitle")}</h3>
            <p className="text-gray-700">{t("impressumprovider")}</p>
            <p className="text-gray-700">{t("hostingaddress")}</p>
            <p className="text-gray-700">{t("register")}</p>
            <p className="text-gray-700">{t("registeramt")}</p>
            <br>
            </br>
             <h3 className="font-semibold mb-2 top-2 gap-2">{t("representer")}</h3>
            <ol>
            <li className="text-gray-700">{t("owner1")}</li> 
            <li className="text-gray-700">{t("owner2")}</li> 

            </ol>

             <p className="text-gray-700">{t("impressumcontact")}</p>
             <p className="text-gray-700">{t("impressumphone")}</p>
              <p className="text-gray-700">{t("impressumfax")}</p>
               <p className="text-gray-700">{t("impressummail")}</p>
               <h3 className="font-semibold mb-2 top-2 gap-2">{t("tax")}</h3>
               <p className="text-gray-700">{t("taxid")}</p>
                <h3 className="font-semibold mb-2 top-2 gap-2">{t("insurance")}</h3>
               <p className="text-gray-700">{t("insurancedesc")}</p>
               <h3 className="font-semibold mb-2 top-2 gap-2">{t("dispute")}</h3>
               <p className="text-gray-700">{t("disputedesc")}</p>
                <h3 className="font-semibold mb-2 top-2 gap-2">{t("concept")}</h3>
               <p className="text-gray-700">{t("designer")}</p>
                <p className="text-gray-700">{t("designerdesc")}</p>


                 <h3 className="font-semibold mb-2 top-2 gap-2">{t("consumer")}</h3>
               <p className="text-gray-700">{t("consumerdesc")}</p>


               <h3 className="font-semibold mb-2 top-2 gap-2">{t("content")}</h3>
               <p className="text-gray-700">{t("contentdesc")}</p>

               <h3 className="font-semibold mb-2 top-2 gap-2">{t("link")}</h3>
               <p className="text-gray-700">{t("linkdesc")}</p>

                <h3 className="font-semibold mb-2 top-2 gap-2">{t("copy")}</h3>
               <p className="text-gray-700">{t("copydesc")}</p>






             
        

        </section>



      </main>
    </div>
  );
    
    
    
    
    
    </>)
}