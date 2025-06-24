import ClientPage from "./ClientPage";
import React from "react";

async function Page({ params }) {
  const resolvedParams = await params;
  const projectName = decodeURIComponent(resolvedParams.project_name);
  return (
    <div>
      <ClientPage projectName={projectName} />
    </div>
  );
}

export default Page;
