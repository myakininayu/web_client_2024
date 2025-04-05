import Table from "react-bootstrap/Table";
import Product from "./Product/Product";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useStore from "../../store";
import { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";

function Products() {
  const {
    products,
    filteredProducts,
    sortedProducts,
    getProduct,
    getFilteredProducts,
    getSortedProducts,
  } = useStore();

  const [filtersApplied, setFiltersApplied] = useState(false);
  const [sortApplied, setSortApplied] = useState(false);

  const [filters, setFilters] = useState({
    field: "price",
    operator: ">",
    value: "",
  });

  const [sort, setSort] = useState({
    field: "price",
    direction: "asc",
  });

  // Загрузка начальных данных
  useEffect(() => {
    getProduct();
  }, []);

  // Применение фильтров
  const applyFilters = async () => {
    await getFilteredProducts({
      field: filters.field,
      operator: filters.operator,
      value: filters.field === "price" ? Number(filters.value) : filters.value,
    });
    setFiltersApplied(true);
    setSortApplied(false); // Сбрасываем сортировку при новом фильтре
  };

  // Применение сортировки
  const applySorting = async () => {
    await getSortedProducts({
      field: sort.field,
      direction: sort.direction,
    });
    setSortApplied(true);
  };

  // Сброс фильтров и сортировки
  const resetFilters = async () => {
    await getProduct();
    setFiltersApplied(false);
    setSortApplied(false);
  };

  const getDisplayProducts = () => {
    if (sortApplied && sortedProducts.length > 0) {
      return sortedProducts;
    }
    if (filtersApplied) {
      return filteredProducts; // Показываем пустой массив, если ничего не найдено
    }
    return products;
  };

  const displayProducts = getDisplayProducts();

  return (
    <div className="m-3">
      {/* Фильтрация */}
      <Form className="mb-4">
        <Row>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Поле для фильтрации</Form.Label>
              <Form.Select
                value={filters.field}
                onChange={(e) =>
                  setFilters({ ...filters, field: e.target.value })
                }
              >
                <option value="price">Цена</option>
                <option value="name">Название</option>
                <option value="category">Категория</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Оператор</Form.Label>
              <Form.Select
                value={filters.operator}
                onChange={(e) =>
                  setFilters({ ...filters, operator: e.target.value })
                }
              >
                <option value=">">{">"}</option>
                <option value="<">{"<"}</option>
                <option value=">=">{">="}</option>
                <option value="<=">{"<="}</option>
                <option value="==">{"равно"}</option>
                <option value="!=">{"не равно"}</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Значение</Form.Label>
              <Form.Control
                type={filters.field === "price" ? "number" : "text"}
                value={filters.value}
                onChange={(e) =>
                  setFilters({ ...filters, value: e.target.value })
                }
                placeholder={
                  filters.operator === "text_search"
                    ? "Введите текст..."
                    : "Введите значение..."
                }
              />
            </Form.Group>
          </Col>
          <Col md={3} className="d-flex align-items-end gap-2">
            <Button variant="primary" onClick={applyFilters}>
              Применить фильтр
            </Button>
            <Button variant="outline-secondary" onClick={resetFilters}>
              Сбросить
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Сортировка */}
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Сортировать по</Form.Label>
              <Form.Select
                value={sort.field}
                onChange={(e) => setSort({ ...sort, field: e.target.value })}
              >
                <option value="price">Цена</option>
                <option value="name">Название</option>
                <option value="category">Категория</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Направление</Form.Label>
              <Form.Select
                value={sort.direction}
                onChange={(e) =>
                  setSort({ ...sort, direction: e.target.value })
                }
              >
                <option value="asc">По возрастанию</option>
                <option value="desc">По убыванию</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4} className="d-flex align-items-end">
            <Button variant="success" onClick={applySorting}>
              Применить сортировку
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Таблица продуктов */}
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Категория</th>
            <th>Фото</th>
            <th>Цена</th>
            <th>Настройки</th>
          </tr>
        </thead>
        <tbody>
          {displayProducts.map((product) => (
            <Product key={product.id} dish={product} />
          ))}
        </tbody>
      </Table>

      <Link to="/dishes_form">
        <Button variant="primary">Создать</Button>
      </Link>
    </div>
  );
}

export default Products;
