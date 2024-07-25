import Footer from "./../../components/layout/Footer";
import { Navbar } from "../../components/layout/Navbar";

import '../globals.css'
import { createClient } from "@/utils/supabase/server";
export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const supabaseClient = createClient();
    const {data} = await supabaseClient.auth.getUser()
    return (
        <html lang="en">

            <body className="flex flex-col justify-between">
                <div className="fixed w-full z-50">
                    <Navbar user={data.user} />
                </div>
                  <div className="m-h-screen">
                  {children}
                  </div>
            
                    <Footer />
                
            </body>

        </html>
    );
}
