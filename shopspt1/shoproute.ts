import express, { Router, Request, Response } from "express";
import { Shop } from "./shop";

const shops: Shop[] = [
  { id: 1, name: "Pepper's Pizza", rating: 4.5 },
  { id: 2, name: "Clive's Chives", rating: 3.4 },
  { id: 3, name: "Betty's Brews", rating: 4.3 },
  { id: 4, name: "Sylvester's Shoes", rating: 3.8 },
  { id: 5, name: "Teddy's Tunes", rating: 4.7 },
];

export const shopRouter = Router();

shopRouter.get("/", async (req: Request, res: Response): Promise<Response> => {
    if(req.query.minRating !== undefined){
        let minRatingArray = shops.filter((x) => x.rating <= Number(req.query.minRating))
        return res.status(200).json(minRatingArray)
    }
  else {return res.status(200).json(shops)};
});

shopRouter.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    let shopIWantToFind = shops.find((x) => x.id === Number(req.params.id));
    if (shopIWantToFind === undefined) {
      return res.status(404).send(`"error: "Shop not found: ${req.params.id}`);
    } else {
      return res.status(200).json(shopIWantToFind);
    }
  }
);

shopRouter.post("/", async (req: Request, res: Response): Promise<Response> => {
 let newShop:Shop = {
    id: GetNextId(),
    name: req.body.name,
    rating: req.body.rating
 }
 shops.push(newShop)
 return res.status(201).json(newShop)
})

shopRouter.put("/:id",async (req: Request, res: Response): Promise<Response> => {
    let shopFound = shops.find((x) => x.id === Number(req.params.id))
    if(shopFound !== undefined) {
        shopFound.name = String(req.body.name),
        shopFound.rating = Number(req.body.rating)
        return res.status(200).json(shopFound)
    }else {
        return res.status(404).send(`ID could not be found.`);
      }
})

shopRouter.delete("/:id",async (req: Request, res: Response): Promise<Response> => {
    let shopFound = shops.find((x) => x.id === Number(req.params.id))
    if (shopFound !== undefined) {
        let index = shops.indexOf(shopFound)
        shops.splice(index, 1)
        return res.status(204).send(`Deleted`);
    } else {
        return res.status(404).send(`ID could not be found.`)
    }
})

function GetNextId() {
    return Math.max(...shops.map((x) => x.id)) + 1;
  }
