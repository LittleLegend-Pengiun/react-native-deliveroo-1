import { createServer } from "miragejs";

export const setupServer = () => {
    let server = createServer();
    server.get("/api/all_features", {
        all_features:
        [
            {
              id: 1,
              title: "Features",
              description: "Paid placement for our partner"
            },
            {
              id: 2,
              title: "Discounts",
              description: "Paid placement for our partner"
            },
            {
              id: 3,
              title: "Offers near you",
              description: "Paid placement for our partner"
            }
        ]
    })
}