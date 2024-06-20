'use client'

import { usePathname } from 'next/navigation'
import Sidebar from './_component/Sidebar'

const layout = ({ children }) => {
  const pathName = usePathname();
  const excludedPaths = [
    "sent",
    "sendScreen",
    "ResetSuccessful",
    "resetPassword",
    "notify",
    "invoicePreview",
    "passwordSuccessful",
  ];
  console.log(pathName.split("/"));
  return (
    <div>
      {!excludedPaths.includes(pathName.split("/")[1]) ? (
        <div className="flex w-full sm:w-full">
          <div className="lg:w-1/6">
            <Sidebar />
          </div>
          <div
            className=" lg:w-5/6 h-screen"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {children}
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default layout