const parent = React.createElement("div", { id: "parent" },
  React.createElement("div", {
    id: "child"
  },
    [React.createElement("h1", { id: "head" }, "hello audilaskhmi"),
    React.createElement("h2", { id: "head2" }, "hello lakshmi")]))




const heading = React.createElement("h1", { id: "header" }, "hello lak")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)