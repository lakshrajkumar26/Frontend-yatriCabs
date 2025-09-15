import { NextRequest, NextResponse } from "next/server";

export async function GET ( request : NextRequest) {
    // const  BaseURL = "https://api.mapbox.com/search/searchbox/v1/suggest?q={search_text}"
    
    const  BaseURL = "https://api.mapbox.com/search/searchbox/v1/suggest"

//     # Search for Michigan Stadium with limit=1
//  "https://api.mapbox.com/search/searchbox/v1/suggest?q=Michigan%20Stadium&language=en&limit=1&session_token=[GENERATED-UUID]&proximity=-83.748708,42.265837&country=US&access_token=pk.eyJ1IjoibGFrc2hyYWprdW1hciIsImEiOiJjbWMxeHNjbnAwMmk4MmtzZDE3eDNzdXMyIn0.6poxTnUAaZUqQ3WaItW5-w"
    
    //   URL is class and new to instanse for request.url then taking searchParams and => value of search inside q
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");
    const session_token = "ahdfhdaf"
   const finalUrl = `${BaseURL}`+`?q=`+`${q}`+`&language=en`+`&limit=8`+`&session_token=`+`${session_token}`+`&country=IN`+`&access_token=`+`${process.env.MAPBOX_ACCESS_TOKEN}`


  const response = await fetch(finalUrl,{
    headers : {
        "Content-Type" : "application/json"
    }
  })
     const result =  await response.json();

    return NextResponse.json( {data : result ,query : q || "No query Found"})
}