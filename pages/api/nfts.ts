// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// const axios = require("axios").default;

// type Data = {
//     name: string;
// };

type Data = any;

// const nfts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
//     const options = {
//         method: "GET",
//         url: "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20",
//     };

//     try {
//         let resource = await axios.get(
//             "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20"
//         );
//         let nfts = await resource.data;
//         console.log(nfts);
//         // axios
//         //     .request(options)
//         //     .then(function (response) {
//         //         console.log(response.data);
//         //     })
//         //     .catch(function (error) {
//         //         console.error(error);
//         //     });
//         // let resource: { assests: any[] } = await sdk["getting-assets"]({
//         //     order_direction: "desc",
//         //     offset: "0",
//         //     limit: "20",
//         // });
//         return res.status(200).json({ data: "resource" });
//         // console.log(resource);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: "Internal error" });
//     }
// };

// export default nfts;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log("got here nft");
    res.status(200).json({ name: "John Doe" });
}
