import "./globals.css";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

            <body className="flex flex-col justify-b">
                <div className="fixed w-full">
                </div>
                  <div className="m-h-screen">
                  {children}
                  </div>
            
                
            </body>

        </html>
    );
}
