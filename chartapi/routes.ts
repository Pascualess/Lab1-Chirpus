import express, { Router, Request, Response } from "express";
import { Item } from "./item";

let itemArray: Item[] = [
  { id: 1, quantity: 12, price: 3, product: "Eggs" },
  { id: 2, quantity: 1, price: 4, product: "Avocado" },
  { id: 3, quantity: 9, price: 5, product: "Hotdogs" },
  { id: 4, quantity: 4, price: 6, product: "Cupcakes" },
];

export const itemRouter = Router();

itemRouter.get("/", async (req: Request, res: Response): Promise<Response> => {
  if (req.query.maxPrice !== undefined) {
    let underArray = itemArray.filter(
      (x) => x.price <= Number(req.query.maxPrice)
    );
    return res.status(200).json(underArray);
  } else if (req.query.prefix !== undefined) {
    let startsWithArray = itemArray.filter((x) =>
      x.product.startsWith(String(req.query.prefix))
    );
    return res.status(200).json(startsWithArray);
  } else if (req.query.pageSize !== undefined) {
    let pageSize = itemArray.slice(0, Number(req.query.pageSize));
    return res.status(200).json(pageSize);
  } else {
    return res.status(200).json(itemArray);
  }
});
itemRouter.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    let itemIWantToFind = itemArray.find((x) => x.id === Number(req.params.id));
    if (itemIWantToFind === undefined) {
      return res.status(404).send("ID Not Found");
    } else {
      return res.status(200).json(itemIWantToFind);
    }
  }
);
itemRouter.post("/", async (req: Request, res: Response): Promise<Response> => {
  let newItem: Item = {
    id: GetNextId(),
    product: req.body.product,
    price: req.body.price,
    quantity: req.body.quantity,
  };
  itemArray.push(newItem);
  return res.status(201).json(newItem);
});
itemRouter.put(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    //find the item by the id
    let itemFound = itemArray.find((x) => x.id === Number(req.params.id));

    if (itemFound !== undefined) {
      itemFound.price = Number(req.body.price);
      itemFound.product = String(req.body.product);
      itemFound.quantity = Number(req.body.quantity);
      return res.status(200).json(itemFound);
    } else {
      return res.status(404).send(`Hey I didn't find it`);
    }
  }
);
itemRouter.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    let itemFound = itemArray.find((x) => x.id === Number(req.params.id));
    if (itemFound !== undefined) {
      let index = itemArray.indexOf(itemFound);
      itemArray.splice(index, 1);
      return res.status(204).json({ message: "Item removed successfully." });
    } else {
      return res.status(404).json({ message: "Item not found." });
    }
  }
);

function GetNextId() {
  return Math.max(...itemArray.map((x) => x.id)) + 1;
}
