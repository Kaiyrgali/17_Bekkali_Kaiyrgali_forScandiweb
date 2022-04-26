# Test Task
## for the position Junior React developer
![N|Solid](https://cutt.ly/tGfawWZ)

Original Task text - https://www.notion.so/Entry-React-developer-TEST-39f601f8aa3f48ac88c4a8fefda304c1

- You are be expected to fetch data from the GraphQL endpoint and to provide an interface to view and interact with this data. You can find the endpoint [here](https://github.com/scandiweb/junior-react-endpoint), along with instructions on how to launch it.
- The solution should get implemented as per design, which is available at [this link](https://www.figma.com/file/MSyCAqVy1UgNap0pvqH6H3/Junior-Frontend-Test-Designs-Public?node-id=0%3A1).
- FAQ/frequently asked [questions](https://www.notion.so/00e72f0844a344dda28e19855d2fc34a);

### Attention !

- To get started, I downloaded the Figma project locally. After finishing work, I found that my local layout is different from the public one.
- GraphQL endpoint was also downloaded locally and was not compared to the latest public version.

### Feature

- I thought that it would be nice to have a choice of several attributes of one product, and not just one attribute. Therefore, you can select the same product with different attributes and they will appear in the cart (using the Map object). If you do not select an item, it will not be added to shopping cart.
- By default, products labeled "Out of stock" are not active for choice. But if you want to see how the product colors are selected in the attributes, change the code in the ProductListCard.js file to the following (line 13):
```sh
 const urlDetails = `/details/${id}`
```
