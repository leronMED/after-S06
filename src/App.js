import { useEffect, useState } from "react";

import "./style.css";
// import express from "express";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("about-me");
  const [aboutMe, setAboutMe] = useState(true);
  const [product, setProduct] = useState(false);
  const [productInStore, setProductInStore] = useState(false);
  const [customers, setCustomers] = useState(false);
  const [cheks, setCheks] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />

      <main className="main">
        <CategoryFilter
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          setProduct={setProduct}
          setAboutMe={setAboutMe}
          setProductInStore={setProductInStore}
          setCustomers={setCustomers}
          setCheks={setCheks}
          setEmployee={setEmployee}
        />
        {aboutMe ? <AboutMe setAboutMe={setAboutMe} aboutMe={aboutMe} /> : null}
        {product ? <Product setProduct={setProduct} product={product} /> : null}
        {productInStore ? (
          <ProductInStore
            setProductInStore={setProductInStore}
            productInStore={productInStore}
            editProduct={editProduct}
            setEditProduct={setEditProduct}
          />
        ) : null}
        {customers ? (
          <Customers setCustomers={setCustomers} customers={customers} />
        ) : null}
        {cheks ? <Cheks setCheks={setCheks} cheks={cheks} /> : null}
        {employee ? (
          <Employee setEmployee={setEmployee} employee={employee} />
        ) : null}
      </main>
    </>
  );
}

function Header({ showForm, setShowForm }) {
  const appTitle = "Zlagoda";

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
        <h1>{appTitle}</h1>
      </div>

      {/* <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share a fact"}
      </button> */}
    </header>
  );
}

function CategoryFilter({
  setCurrentCategory,
  currentCategory,
  setProduct,
  setAboutMe,
  setProductInStore,
  setCustomers,
  setCheks,
  setEmployee,
}) {
  return (
    <aside>
      <ul>
        <li className="products">
          <button
            className="btn btn-all-categories"
            onClick={() => {
              if (currentCategory === "about-me") {
                setAboutMe(false);
              } else if (currentCategory === "products-in-store") {
                setProductInStore(false);
              } else if (currentCategory === "customers") {
                setCustomers(false);
              } else if (currentCategory === "employee") {
                setEmployee(false);
              } else if (currentCategory === "cheks") {
                setCheks(false);
              }
              setCurrentCategory("product");
              setProduct(true);
            }}
          >
            Products
          </button>
        </li>
        <li className="products-in-store">
          <button
            className="btn btn-all-categories"
            onClick={() => {
              if (currentCategory === "about-me") {
                setAboutMe(false);
              } else if (currentCategory === "product") {
                setProduct(false);
              } else if (currentCategory === "customers") {
                setCustomers(false);
              } else if (currentCategory === "cheks") {
                setCheks(false);
              } else if (currentCategory === "employee") {
                setEmployee(false);
              }
              setCurrentCategory("products-in-store");
              setProductInStore(true);
            }}
          >
            Products in store
          </button>
        </li>
        <li className="customers">
          <button
            className="btn btn-all-categories"
            onClick={() => {
              if (currentCategory === "about-me") {
                setAboutMe(false);
              } else if (currentCategory === "product") {
                setProduct(false);
              } else if (currentCategory === "products-in-store") {
                setProductInStore(false);
              } else if (currentCategory === "cheks") {
                setCheks(false);
              } else if (currentCategory === "employee") {
                setEmployee(false);
              }
              setCurrentCategory("customers");
              setCustomers(true);
            }}
          >
            Customers cart
          </button>
        </li>
        <li className="cheks">
          <button
            className="btn btn-all-categories"
            onClick={() => {
              if (currentCategory === "about-me") {
                setAboutMe(false);
              } else if (currentCategory === "products-in-store") {
                setProductInStore(false);
              } else if (currentCategory === "customers") {
                setCustomers(false);
              } else if (currentCategory === "product") {
                setProduct(false);
              } else if (currentCategory === "employee") {
                setEmployee(false);
              }
              setCurrentCategory("cheks");
              setCheks(true);
            }}
          >
            Cheks
          </button>
        </li>
        <li className="employee">
          <button
            className="btn btn-all-categories"
            onClick={() => {
              if (currentCategory === "about-me") {
                setAboutMe(false);
              } else if (currentCategory === "product") {
                setProduct(false);
              } else if (currentCategory === "products-in-store") {
                setProductInStore(false);
              } else if (currentCategory === "cheks") {
                setCheks(false);
              } else if (currentCategory === "customers") {
                setCustomers(false);
              }
              setCurrentCategory("employee");
              setEmployee(true);
            }}
          >
            Employee
          </button>
        </li>
        <li className="about-me">
          <button
            className="btn btn-all-categories"
            onClick={() => {
              if (currentCategory === "ptoduct") {
                setProduct(false);
              } else if (currentCategory === "products-in-store") {
                setProductInStore(false);
              } else if (currentCategory === "customers") {
                setCustomers(false);
              } else if (currentCategory === "cheks") {
                setCheks(false);
              } else if (currentCategory === "employee") {
                setEmployee(false);
              }
              setCurrentCategory("about-me");
              setAboutMe(true);
            }}
          >
            About me
          </button>
        </li>
        <li className="log-out">
          <button
            className="btn btn-all-categories"
            onClick={() => setCurrentCategory("log-out")}
          >
            Log out
          </button>
        </li>
      </ul>
    </aside>
  );
}
function AboutMe({ setAboutMe, aboutMe }) {
  return (
    <div className="about-me-container container">
      <h2>Welcome to ZLAGODA</h2>
      <img src="store.jpg" width="600" alt="Photo of store" />
      <p>
        The software application is designed to process data used in in the
        process of selling goods in the grocery mini-supermarket "ZLAGODA". It
        will help more conveniently track the quantity and unit sales price of
        all products available in the store, history sales of goods, a list of
        all types of goods sold in the supermarket, their main ones
        characteristics, information about all employees and regular customers
        who have a card client, this mini-supermarket. Will provide access to
        necessary information to cashiers and mini-supermarket managers.
      </p>
    </div>
  );
}

function Product() {
  const [Fruit, setFruit] = useState([
    {
      id: "13244",
      name: "Apple",
      producer: "Ivan",
      category: "Fruit",
      characteristics: "Tasty",
    },
    {
      id: "13244",
      name: "Apple",
      producer: "Ivan",
      category: "Fruit",
      characteristics: "Tasty",
    },
    {
      id: "45678",
      name: "Banana",
      producer: "Maria",
      category: "Fruit",
      characteristics: "Sweet",
    },
    {
      id: "78910",
      name: "Orange",
      producer: "John",
      category: "Fruit",
      characteristics: "Juicy",
    },
    {
      id: "11121",
      name: "Grapes",
      producer: "Emily",
      category: "Fruit",
      characteristics: "Crunchy",
    },
    {
      id: "13141",
      name: "Pineapple",
      producer: "Alex",
      category: "Fruit",
      characteristics: "Tangy",
    },
  ]);

  const [Bakery, setBakery] = useState([
    {
      id: "21212",
      name: "Baguette",
      producer: "Bakery Co.",
      category: "Bakery",
      characteristics: "Crusty",
    },
    {
      id: "34343",
      name: "Croissant",
      producer: "Bakery Co.",
      category: "Bakery",
      characteristics: "Flaky",
    },
  ]);

  const [Dairy, setDairy] = useState([
    {
      id: "56565",
      name: "Milk",
      producer: "Dairy Farm",
      category: "Dairy",
      characteristics: "Fresh",
    },
    {
      id: "78787",
      name: "Cheese",
      producer: "Dairy Farm",
      category: "Dairy",
      characteristics: "Aged",
    },
  ]);

  const [Fish, setFish] = useState([
    {
      id: "90909",
      name: "Salmon",
      producer: "Seafood Co.",
      category: "Fish",
      characteristics: "Fatty",
    },
    {
      id: "23232",
      name: "Tuna",
      producer: "Seafood Co.",
      category: "Fish",
      characteristics: "Lean",
    },
  ]);

  const [Vegetable, setVegetable] = useState([
    {
      id: "45454",
      name: "Carrot",
      producer: "Farm Fresh",
      category: "Vegetable",
      characteristics: "Crunchy",
    },
    {
      id: "67676",
      name: "Lettuce",
      producer: "Farm Fresh",
      category: "Vegetable",
      characteristics: "Crisp",
    },
  ]);

  const initialRowData = [...Fruit, ...Bakery, ...Dairy, ...Fish, ...Vegetable];
  const [rowData, setRowData] = useState(initialRowData);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    producer: "",
    category: "",
    characteristics: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Fruit", "Bakery", "Dairy", "Fish", "Vegetable"];
  const [showForm, setShowForm] = useState(false);

  const handleEditClick = (index) => {
    setEditingRowIndex(index);
  };

  const handleSaveClick = () => {
    setEditingRowIndex(null);
    // Here you can handle saving the updated values, e.g., making an API call
  };

  const handleFormInputChange = (e, index, field) => {
    const updatedData = [...rowData];
    updatedData[index][field] = e.target.value;
    setRowData(updatedData);
  };

  const handleDeleteClick = (index) => {
    const updatedData = [...rowData];
    const deletedItem = updatedData[index]; // Отримати видаляємий елемент
    updatedData.splice(index, 1);
    setRowData(updatedData);

    // Тепер знайдемо і видалимо відповідний елемент з масиву фруктів
    const category = deletedItem.category;
    switch (category) {
      case "Fruit":
        setFruit((prevFruit) =>
          prevFruit.filter((item) => item.id !== deletedItem.id)
        );
        break;
      case "Bakery":
        setBakery((prevBakery) =>
          prevBakery.filter((item) => item.id !== deletedItem.id)
        );
        break;
      case "Dairy":
        setDairy((prevDairy) =>
          prevDairy.filter((item) => item.id !== deletedItem.id)
        );
        break;
      case "Fish":
        setFish((prevFish) =>
          prevFish.filter((item) => item.id !== deletedItem.id)
        );
        break;
      case "Vegetable":
        setVegetable((prevVegetable) =>
          prevVegetable.filter((item) => item.id !== deletedItem.id)
        );
        break;
      default:
        break;
    }
  };

  const handleAddButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let filteredData = [];
    if (selectedCategories.includes("Fruit")) {
      console.log(Fruit);
      filteredData = [...filteredData, ...Fruit];
    }
    if (selectedCategories.includes("Bakery")) {
      filteredData = [...filteredData, ...Bakery];
    }
    if (selectedCategories.includes("Fish")) {
      filteredData = [...filteredData, ...Fish];
    }
    if (selectedCategories.includes("Dairy")) {
      filteredData = [...filteredData, ...Dairy];
    }
    if (selectedCategories.includes("Vegetable")) {
      filteredData = [...filteredData, ...Vegetable];
    }
    setRowData(filteredData);
  };

  const handleFormSubmitAdd = (e) => {
    e.preventDefault();
    const newRowData = [...rowData, formData];
    setRowData(newRowData);
    setShowForm(false);

    switch (formData.category) {
      case "Fruit":
        setFruit([...Fruit, formData]);
        break;
      case "Bakery":
        setBakery([...Bakery, formData]);
        break;
      case "Dairy":
        setDairy([...Dairy, formData]);
        break;
      case "Fish":
        setFish([...Fish, formData]);
        break;
      case "Vegetable":
        setVegetable([...Vegetable, formData]);
        break;
      default:
        break;
    }

    setFormData({
      id: "",
      name: "",
      producer: "",
      category: "",
      characteristics: "",
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories((prevState) => [...prevState, value]);
    } else {
      setSelectedCategories((prevState) =>
        prevState.filter((category) => category !== value)
      );
    }
  };

  const handlePrintButtonClick = () => {
    window.print();
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setFormData({ ...formData, category: e.target.value });
  };

  return (
    <div className="product-container container">
      <form onSubmit={handleFormSubmit}>
        {categories.map((category, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name="category"
              value={category}
              onChange={handleCheckboxChange}
            />
            {category}
          </label>
        ))}
        <button type="submit">Filter</button>
      </form>
      <button className="btn-print" onClick={handlePrintButtonClick}>
        Print
      </button>
      <button className="btn-add" onClick={handleAddButtonClick}>
        Add
      </button>
      {showForm && (
        <form onSubmit={handleFormSubmitAdd}>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            placeholder="Number"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="text"
            name="producer"
            value={formData.producer}
            onChange={(e) =>
              setFormData({ ...formData, producer: e.target.value })
            }
            placeholder="Producer"
          />
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="characteristics"
            value={formData.characteristics}
            onChange={(e) =>
              setFormData({ ...formData, characteristics: e.target.value })
            }
            placeholder="Characteristics"
          />
          <button type="submit">Save</button>
        </form>
      )}
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Producer</th>
            <th>Category</th>
            <th>Characteristics</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, index) => (
            <tr key={index}>
              <td>
                {editingRowIndex === index ? (
                  <input
                    type="text"
                    value={row.id}
                    onChange={(e) => handleFormInputChange(e, index, "id")}
                  />
                ) : (
                  row.id
                )}
              </td>
              <td>
                {editingRowIndex === index ? (
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) => handleFormInputChange(e, index, "name")}
                  />
                ) : (
                  row.name
                )}
              </td>
              <td>
                {editingRowIndex === index ? (
                  <input
                    type="text"
                    value={row.producer}
                    onChange={(e) =>
                      handleFormInputChange(e, index, "producer")
                    }
                  />
                ) : (
                  row.producer
                )}
              </td>
              <td>
                {editingRowIndex === index ? (
                  <input
                    type="text"
                    value={row.category}
                    onChange={(e) =>
                      handleFormInputChange(e, index, "category")
                    }
                  />
                ) : (
                  row.category
                )}
              </td>
              <td>
                {editingRowIndex === index ? (
                  <input
                    type="text"
                    value={row.characteristics}
                    onChange={(e) =>
                      handleFormInputChange(e, index, "characteristics")
                    }
                  />
                ) : (
                  row.characteristics
                )}
              </td>
              <td>
                {editingRowIndex === index ? (
                  <button onClick={() => handleSaveClick()}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(index)}>Edit</button>
                )}
              </td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => handleDeleteClick(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProductInStore({ setProduct, product, editProduct, setEditProduct }) {
  const initialRowData = [
    {
      number: "13244",
      name: "Apple",
      salesPrice: 10.99,
      units: 20,
      onSale: true,
      category: "Fruit",
    },
    {
      number: "45678",
      name: "Banana",
      salesPrice: 5.49,
      units: 15,
      onSale: false,
      category: "Fruit",
    },
    {
      number: "78910",
      name: "Orange",
      salesPrice: 8.99,
      units: 25,
      onSale: true,
      category: "Fruit",
    },
    {
      number: "11121",
      name: "Grapes",
      salesPrice: 3.99,
      units: 30,
      onSale: false,
      category: "Fruit",
    },
    {
      number: "13141",
      name: "Pineapple",
      salesPrice: 12.99,
      units: 18,
      onSale: true,
      category: "Fruit",
    },
    {
      number: "21212",
      name: "Baguette",
      salesPrice: 2.99,
      units: 40,
      onSale: false,
      category: "Bakery",
    },
    {
      number: "34343",
      name: "Croissant",
      salesPrice: 4.49,
      units: 22,
      onSale: true,
      category: "Bakery",
    },
    {
      number: "56565",
      name: "Milk",
      salesPrice: 6.99,
      units: 17,
      onSale: false,
      category: "Dairy",
    },
    {
      number: "78787",
      name: "Cheese",
      salesPrice: 9.99,
      units: 12,
      onSale: true,
      category: "Dairy",
    },
    {
      number: "90909",
      name: "Salmon",
      salesPrice: 15.99,
      units: 8,
      onSale: false,
      category: "Fish",
    },
    {
      number: "23232",
      name: "Tuna",
      salesPrice: 7.49,
      units: 10,
      onSale: true,
      category: "Fish",
    },
    {
      number: "45454",
      name: "Carrot",
      salesPrice: 1.99,
      units: 35,
      onSale: false,
      category: "Vegetable",
    },
    {
      number: "67676",
      name: "Lettuce",
      salesPrice: 2.49,
      units: 45,
      onSale: true,
      category: "Vegetable",
    },
  ];

  const [rowData, setRowData] = useState(initialRowData);
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [formData, setFormData] = useState({
    number: "",
    name: "",
    salesPrice: "",
    units: "",
    onSale: false,
    category: "",
    sortBy: "", // New state for sorting
  });
  const [showForm, setShowForm] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleEditClick = (index) => {
    setEditingRowIndex(index);
  };

  const handleSaveClick = () => {
    setEditingRowIndex(null);
    // Here you can handle saving the updated values, e.g., making an API call
  };

  const handleAddButtonClick = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Sort the table data based on the selected value in the dropdown list
    let sortedData = [...initialRowData];
    if (formData.sortBy === "name") {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (formData.sortBy === "units") {
      sortedData.sort((a, b) => a.units - b.units);
    }

    // Filter the sorted data based on selected categories
    const filteredData = sortedData.filter((product) =>
      selectedCategories.includes(product.category)
    );

    // If "All" option is selected, show all products
    if (selectedCategories.includes("All")) {
      setSelectedCategories(initialRowData.map((product) => product.category));
    } else {
      setRowData(filteredData);
    }
  };
  const handleFormSubmitAdd = (e) => {
    e.preventDefault();
    const newRowData = [...rowData, formData];
    setRowData(newRowData);
    setShowForm(false);
    setFormData({
      id: "",
      name: "",
      producer: "",
      category: "",
      characteristics: "",
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (value === "All") {
      if (checked) {
        setSelectedCategories(
          initialRowData.map((product) => product.category)
        );
      } else {
        setSelectedCategories([]);
      }
    } else {
      if (checked) {
        setSelectedCategories((prevState) => [...prevState, value]);
      } else {
        setSelectedCategories((prevState) =>
          prevState.filter((category) => category !== value)
        );
      }
    }
  };

  const handleDeleteClick = (index) => {
    const updatedData = [...rowData];
    updatedData.splice(index, 1);
    setRowData(updatedData);
  };
  const handlePrintButtonClick = () => {
    window.print();
  };

  return (
    <div className="product-container container">
      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="checkbox"
            name="category"
            value="All"
            onChange={handleCheckboxChange}
          />
          All
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Fruit"
            onChange={handleCheckboxChange}
          />
          Fruit
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Bakery"
            onChange={handleCheckboxChange}
          />
          Bakery
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Dairy"
            onChange={handleCheckboxChange}
          />
          Dairy
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Fish"
            onChange={handleCheckboxChange}
          />
          Fish
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Vegetable"
            onChange={handleCheckboxChange}
          />
          Vegetable
        </label>
        <select
          name="sortBy"
          value={formData.sortBy}
          onChange={handleFormInputChange}
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="units">Number of Units</option>
        </select>
        <button type="submit">Filter</button>
      </form>
      <button className="btn-print" onClick={handlePrintButtonClick}>
        Print
      </button>
      <button className="btn-add" onClick={handleAddButtonClick}>
        Add
      </button>
      {showForm && (
        <form onSubmit={handleFormSubmitAdd}>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleFormInputChange}
            placeholder="Number"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormInputChange}
            placeholder="Name"
          />
          <input
            type="number"
            name="salesPrice"
            value={formData.salesPrice}
            onChange={handleFormInputChange}
            placeholder="Sales Price"
          />
          <input
            type="number"
            name="units"
            value={formData.units}
            onChange={handleFormInputChange}
            placeholder="Units"
          />
          <label>
            <input
              type="checkbox"
              name="onSale"
              checked={formData.onSale}
              onChange={(e) =>
                setFormData({ ...formData, onSale: e.target.checked })
              }
            />
            On Sale
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleFormInputChange}
          >
            <option value="">Select Category</option>
            <option value="Fruit">Fruit</option>
            <option value="Bakery">Bakery</option>
            <option value="Dairy">Dairy</option>
            <option value="Fish">Fish</option>
            <option value="Vegetable">Vegetable</option>
          </select>
          <button type="submit">Save</button>
        </form>
      )}
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Sales Price</th>
            <th>Units</th>
            <th>On Sale</th>
            <th>Category</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, index) => (
            <tr key={index}>
              <td>
                {editingRowIndex === index ? (
                  <input
                    type="text"
                    value={row.number}
                    onChange={(e) => {
                      const updatedData = [...rowData];
                      updatedData[index].number = e.target.value;
                      setRowData(updatedData);
                    }}
                  />
                ) : (
                  row.number
                )}
              </td>
              <td>
                {editingRowIndex === index ? (
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) => {
                      const updatedData = [...rowData];
                      updatedData[index].name = e.target.value;
                      setRowData(updatedData);
                    }}
                  />
                ) : (
                  row.name
                )}
              </td>
              <td>
                {editingRowIndex === index ? (
                  <input
                    type="number"
                    value={row.salesPrice}
                    onChange={(e) => {
                      const updatedData = [...rowData];
                      updatedData[index].salesPrice = e.target.value;
                      setRowData(updatedData);
                    }}
                  />
                ) : (
                  row.salesPrice
                )}
              </td>
              <td>
                {editingRowIndex === index ? (
                  <input
                    type="number"
                    value={row.units}
                    onChange={(e) => {
                      const updatedData = [...rowData];
                      updatedData[index].units = e.target.value;
                      setRowData(updatedData);
                    }}
                  />
                ) : (
                  row.units
                )}
              </td>
              <td>
                {editingRowIndex === index ? (
                  <input
                    type="checkbox"
                    checked={row.onSale}
                    onChange={(e) => {
                      const updatedData = [...rowData];
                      updatedData[index].onSale = e.target.checked;
                      setRowData(updatedData);
                    }}
                  />
                ) : row.onSale ? (
                  "Yes"
                ) : (
                  "No"
                )}
              </td>
              <td>
                {editingRowIndex === index ? (
                  <input
                    type="text"
                    value={row.category}
                    onChange={(e) => {
                      const updatedData = [...rowData];
                      updatedData[index].category = e.target.value;
                      setRowData(updatedData);
                    }}
                  />
                ) : (
                  row.category
                )}
              </td>
              <td>
                {editingRowIndex === index ? (
                  <button className="btn-save" onClick={handleSaveClick}>
                    Save
                  </button>
                ) : (
                  <button
                    className="btn-edit"
                    onClick={() => handleEditClick(index)}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => handleDeleteClick(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Customers({ setCustomers, customers }) {
  return (
    <div className="customers-container container">
      <p>Customers</p>
    </div>
  );
}
function Cheks({ setCheks, cheks }) {
  return (
    <div className="cheks-container container">
      <p>Cheks</p>
    </div>
  );
}
function Employee({ setEmployee, employee }) {
  return (
    <div className="cart-employee container">
      <p>Employee</p>
    </div>
  );
}

export default App;
