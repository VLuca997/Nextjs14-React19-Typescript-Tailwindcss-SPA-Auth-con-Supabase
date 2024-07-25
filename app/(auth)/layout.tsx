import Link from "next/link";
import "../globals.css";
import { Button } from "@/components/ui/button";


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

            <body className="flex justify-between flex-col">
                
                  <div className="m-h-screen">
                    <Button className="bg-red-600 mx-10 my-3"><Link href="/home">Home</Link></Button>
                  {children}
                  </div>
            
                
            </body>

        </html>
    );
}
