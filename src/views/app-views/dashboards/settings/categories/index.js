import React, { useState } from "react";
import {
  Card,
  Table,
  Input,
  Button,
  Menu,
  Row,
  Col,
  Modal,
  Form,
  message,
} from "antd";
import RevenueCategory from "assets/data/category-revenue.data.json";
import ExpenseCategory from "assets/data/category-expense.data.json";
import MethodCategory from "assets/data/category-method.data.json";
import {
  EyeOutlined,
  DeleteOutlined,
  SearchOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import Flex from "components/shared-components/Flex";
import utils from "utils";

const Categories = () => {
  const [list, setList] = useState(RevenueCategory);
  const [list2, setList2] = useState(ExpenseCategory);
  const [list3, setList3] = useState(MethodCategory);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  //Formato de las tablas
  const tableColumns = [
    {
      title: "Ingresos",
      dataIndex: "name",
      sorter: (a, b) => utils.antdTableSorter(a, b, "name"),
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, elm) => (
        <div className="text-right">
          <EllipsisDropdown menu={dropdownMenu(elm)} />
        </div>
      ),
    },
  ];

  const tableColumns2 = [
    {
      title: "Egresos",
      dataIndex: "name",
      sorter: (a, b) => utils.antdTableSorter(a, b, "name"),
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, elm) => (
        <div className="text-right">
          <EllipsisDropdown menu={dropdownMenu2(elm)} />
        </div>
      ),
    },
  ];

  const tableColumns3 = [
    {
      title: "Metodos de pago",
      dataIndex: "name",
      sorter: (a, b) => utils.antdTableSorter(a, b, "name"),
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, elm) => (
        <div className="text-right">
          <EllipsisDropdown menu={dropdownMenu3(elm)} />
        </div>
      ),
    },
  ];

  //Menus para eliminar y editar
  const dropdownMenu = (row) => (
    <Menu>
      <Menu.Item onClick={() => modifyModel()}>
        <Flex alignItems="center">
          <EyeOutlined />
          <span className="ml-2">Editar</span>
        </Flex>
      </Menu.Item>
      <Modal
        title="Modificar Categoria"
        visible={modalMod}
        onCancel={closeModalMod}
        footer={[
          <Button onClick={closeModalMod}>Cancelar</Button>,
          <Button onClick={actionMod}>Modificar</Button>,
        ]}
      >
        <Form.Item
          label="Modificar Categoria de Ingreso"
          name="modRevenue"
          rules={[
            {
              type: "text",
              required: true,
              value: list.id,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Modal>
      <Menu.Item onClick={() => deleteRow(row)}>
        <Flex alignItems="center">
          <DeleteOutlined />
          <span className="ml-2">
            {selectedRows.length > 0
              ? `Delete (${selectedRows.length})`
              : "Delete"}
          </span>
        </Flex>
      </Menu.Item>
    </Menu>
  );

  const dropdownMenu2 = (row) => (
    <Menu>
      <Menu.Item onClick={() => modifyModel2()}>
        <Flex alignItems="center">
          <EyeOutlined />
          <span className="ml-2">Editar</span>
        </Flex>
      </Menu.Item>
      <Modal
        title="Modificar Categoria"
        visible={modalMod2}
        onCancel={closeModalMod2}
        footer={[
          <Button onClick={closeModalMod2}>Cancelar</Button>,
          <Button onClick={actionMod2}>Modificar</Button>,
        ]}
      >
        <Form.Item
          label="Modificar Categoria de Egreso"
          name="modExpense"
          rules={[
            {
              type: "text",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Modal>
      <Menu.Item onClick={() => deleteRow2(row)}>
        <Flex alignItems="center">
          <DeleteOutlined />
          <span className="ml-2">
            {selectedRows.length > 0
              ? `Delete (${selectedRows.length})`
              : "Delete"}
          </span>
        </Flex>
      </Menu.Item>
    </Menu>
  );

  const dropdownMenu3 = (row) => (
    <Menu>
      <Menu.Item onClick={() => modifyModel3()}>
        <Flex alignItems="center">
          <EyeOutlined />
          <span className="ml-2">Editar</span>
        </Flex>
      </Menu.Item>
      <Modal
        title="Modificar Metodo"
        visible={modalMod3}
        onCancel={closeModalMod3}
        footer={[
          <Button onClick={closeModalMod3}>Cancelar</Button>,
          <Button onClick={actionMod3}>Modificar</Button>,
        ]}
      >
        <Form.Item
          label="Modificar Categoria de Ingresos"
          name="modMethod"
          rules={[
            {
              type: "text",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Modal>
      <Menu.Item onClick={() => deleteRow3(row)}>
        <Flex alignItems="center">
          <DeleteOutlined />
          <span className="ml-2">
            {selectedRows.length > 0
              ? `Delete (${selectedRows.length})`
              : "Delete"}
          </span>
        </Flex>
      </Menu.Item>
    </Menu>
  );

 /* const select = (row) =>{
    const objKey = "id";
    let data = list;
    if (selectedRows.length > 1) {
      selectedRows.forEach((elm) => {
        data = utils.filterArray(data, objKey, elm.id);
        setList(data);
        setSelectedRows([]);
      });
    } else {
      data = utils.filterArray(data, objKey, row.id);
    }
  }*/

  //Metodo para borrar
  const deleteRow = (row) => {
    const objKey = "id";
    let data = list;
    if (selectedRows.length > 1) {
      selectedRows.forEach((elm) => {
        data = utils.deleteArrayRow(data, objKey, elm.id);
        setList(data);
        setSelectedRows([]);
      });
    } else {
      data = utils.deleteArrayRow(data, objKey, row.id);
      setList(data);
    }
  };

  const deleteRow2 = (row) => {
    const objKey = "id";
    let data = list2;
    if (selectedRows.length > 1) {
      selectedRows.forEach((elm) => {
        data = utils.deleteArrayRow(data, objKey, elm.id);
        setList2(data);
        setSelectedRows([]);
      });
    } else {
      data = utils.deleteArrayRow(data, objKey, row.id);
      setList2(data);
    }
  };

  const deleteRow3 = (row) => {
    const objKey = "id";
    let data = list3;
    if (selectedRows.length > 1) {
      selectedRows.forEach((elm) => {
        data = utils.deleteArrayRow(data, objKey, elm.id);
        setList3(data);
        setSelectedRows([]);
      });
    } else {
      data = utils.deleteArrayRow(data, objKey, row.id);
      setList3(data);
    }
  };

  //Buscadores
  const rowSelection = {
    onChange: (key, rows) => {
      setSelectedRows(rows);
      setSelectedRowKeys(key);
    },
  };

  const onSearch = (e) => {
    const value = e.currentTarget.value;
    const searchArray = e.currentTarget.value ? list : RevenueCategory;
    const data = utils.wildCardSearch(searchArray, value);
    setList(data);
    setSelectedRowKeys([]);
  };

  const onSearch2 = (e) => {
    const value = e.currentTarget.value;
    const searchArray = e.currentTarget.value ? list2 : ExpenseCategory;
    const data = utils.wildCardSearch(searchArray, value);
    setList2(data);
    setSelectedRowKeys([]);
  };

  const onSearch3 = (e) => {
    const value = e.currentTarget.value;
    const searchArray = e.currentTarget.value ? list3 : MethodCategory;
    const data = utils.wildCardSearch(searchArray, value);
    setList3(data);
    setSelectedRowKeys([]);
  };

  //Model para modificar
  const [modalMod, setModalMod] = useState(false);
  const [modalMod2, setModalMod2] = useState(false);
  const [modalMod3, setModalMod3] = useState(false);

  const modifyModel = () => {
    setModalMod(true);
  };

  const modifyModel2 = () => {
    setModalMod2(true);
  };

  const modifyModel3 = () => {
    setModalMod3(true);
  };

  const closeModalMod = () => {
    setModalMod(false);
  };

  const closeModalMod2 = () => {
    setModalMod2(false);
  };

  const closeModalMod3 = () => {
    setModalMod3(false);
  };

  const actionMod = () => {
    message.success({
      content: "Categoria agregada correctamente",
      duration: 3,
    });
    closeModalMod();
  };

  const actionMod2 = () => {
    message.success({
      content: "Categoria agregada correctamente",
      duration: 3,
    });
    closeModalMod2();
  };

  const actionMod3 = () => {
    message.success({
      content: "Categoria agregada correctamente",
      duration: 3,
    });
    closeModalMod3();
  };

  // Modal para agregar
  const [modalAdd, setModalAdd] = useState(false);
  const [modalAdd2, setModalAdd2] = useState(false);
  const [modalAdd3, setModalAdd3] = useState(false);

  const addCatetegory = () => {
    setModalAdd(true);
  };

  const addCatetegory2 = () => {
    setModalAdd2(true);
  };

  const addCatetegory3 = () => {
    setModalAdd3(true);
  };

  const closeModalAdd = () => {
    setModalAdd(false);
  };

  const closeModalAdd2 = () => {
    setModalAdd2(false);
  };

  const closeModalAdd3 = () => {
    setModalAdd3(false);
  };

  const actionAdd = () => {
    message.success({
      content: "Categoria agregada correctamente",
      duration: 3,
    });
    closeModalAdd();
  };

  const actionAdd2 = () => {
    message.success({
      content: "Categoria agregada correctamente",
      duration: 3,
    });
    closeModalAdd();
  };

  const actionAdd3 = () => {
    message.success({
      content: "Categoria agregada correctamente",
      duration: 3,
    });
    closeModalAdd3();
  };

  //Diseño
  return (
    <div>
      <Row>
        <Col span={8}>
          <Col span={23}>
            <Card>
              <h2>Categorias de Ingresos</h2>
              <Flex
                alignItems="center"
                justifyContent="between"
                mobileFlex={false}
              >
                <Flex className="mb-1" mobileFlex={false}>
                  <div className="mr-md-3 mb-3">
                    <Input
                      placeholder="Search"
                      prefix={<SearchOutlined />}
                      onChange={(e) => onSearch(e)}
                    />
                  </div>
                </Flex>
                <div className="mr-md-3 mb-3">
                  <Button
                    onClick={addCatetegory}
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    block
                  >
                    Añadir Categoria
                  </Button>
                  <Modal
                    title="Agregar Categoria"
                    visible={modalAdd}
                    onCancel={closeModalAdd}
                    footer={[
                      <Button onClick={closeModalAdd}>Cancelar</Button>,
                      <Button onClick={actionAdd}>Agregar</Button>,
                    ]}
                  >
                    <Form.Item
                      label="Nueva Categoria de Ingresos"
                      name="newRevenue"
                      rules={[
                        {
                          type: "text",
                          required: true,
                          message:
                            "¡Por favor, introduzca una nueva categoria! ",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Modal>
                </div>
              </Flex>
              <div className="table-responsive">
                <Table
                  columns={tableColumns}
                  dataSource={list}
                  rowKey="id"
                  rowSelection={{
                    selectedRowKeys: selectedRowKeys,
                    type: "checkbox",
                    preserveSelectedRowKeys: false,
                    ...rowSelection,
                  }}
                />
              </div>
            </Card>
          </Col>
        </Col>

        <Col span={8}>
          <Col span={23}>
            <Card>
              <h2>Categorias de Egresos</h2>
              <Flex
                alignItems="center"
                justifyContent="between"
                mobileFlex={false}
              >
                <Flex className="mb-1" mobileFlex={false}>
                  <div className="mr-md-3 mb-3">
                    <Input
                      placeholder="Search"
                      prefix={<SearchOutlined />}
                      onChange={(e) => onSearch2(e)}
                    />
                  </div>
                </Flex>
                <div className="mr-md-3 mb-3">
                  <Button
                    onClick={addCatetegory2}
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    block
                  >
                    Añadir Categoria
                  </Button>
                  <Modal
                    title="Agregar Categoria de Egresos"
                    visible={modalAdd2}
                    onCancel={closeModalAdd}
                    footer={[
                      <Button onClick={closeModalAdd2}>Cancelar</Button>,
                      <Button onClick={actionAdd2}>Agregar</Button>,
                    ]}
                  >
                    <Form.Item
                      label="Nueva Categoria"
                      name="newExpense"
                      rules={[
                        {
                          type: "text",
                          required: true,
                          message:
                            "¡Por favor, introduzca una nueva categoria! ",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Modal>
                </div>
              </Flex>
              <div className="table-responsive">
                <Table
                  columns={tableColumns2}
                  dataSource={list2}
                  rowKey="id"
                  rowSelection={{
                    selectedRowKeys: selectedRowKeys,
                    type: "checkbox",
                    preserveSelectedRowKeys: false,
                    ...rowSelection,
                  }}
                />
              </div>
            </Card>
          </Col>
        </Col>

        <Col span={8}>
          <Col span={23}>
            <Card>
              <h2>Metodos de pago</h2>
              <Flex
                alignItems="center"
                justifyContent="between"
                mobileFlex={false}
              >
                <Flex className="mb-1" mobileFlex={false}>
                  <div className="mr-md-3 mb-3">
                    <Input
                      placeholder="Search"
                      prefix={<SearchOutlined />}
                      onChange={(e) => onSearch3(e)}
                    />
                  </div>
                </Flex>
                <div className="mr-md-3 mb-3">
                  <Button
                    onClick={addCatetegory3}
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    block
                  >
                    Añadir Metodo
                  </Button>
                  <Modal
                    title="Agregar Metodo de pago"
                    visible={modalAdd3}
                    onCancel={closeModalAdd3}
                    footer={[
                      <Button onClick={closeModalAdd3}>Cancelar</Button>,
                      <Button onClick={actionAdd3}>Agregar</Button>,
                    ]}
                  >
                    <Form.Item
                      label="Nuevo Metodo de pago"
                      name="newMethod"
                      rules={[
                        {
                          type: "text",
                          required: true,
                          message:
                            "¡Por favor, introduzca un nuevo metodo de pago! ",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Modal>
                </div>
              </Flex>
              <div className="table-responsive">
                <Table
                  columns={tableColumns3}
                  dataSource={list3}
                  rowKey="id"
                  rowSelection={{
                    selectedRowKeys: selectedRowKeys,
                    type: "checkbox",
                    preserveSelectedRowKeys: false,
                    ...rowSelection,
                  }}
                />
              </div>
            </Card>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Categories;
