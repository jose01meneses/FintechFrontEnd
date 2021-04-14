import React, {useState} from 'react'
import { Card, Table, Input, Button, Menu } from 'antd';
import ProductListData from "./dataList.json"
import { EyeOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex'
import NumberFormat from 'react-number-format';
import { useHistory } from "react-router-dom";
import utils from 'utils';
import TittleList from "./tittleList.json";

/*const getStockStatus = stockCount => {
	if(stockCount >= 10) {
		return <><Badge status="success" /><span>In Stock</span></>
	}
	if(stockCount < 10 && stockCount > 0) {
		return <><Badge status="warning" /><span>Limited Stock</span></>
	}
	if(stockCount === 0) {
		return <><Badge status="error" /><span>Out of Stock</span></>
	}
	return null
}*/

const ExpenseDetail = (props) => {
	let history = useHistory();
	const tittleListConst = TittleList.filter(element => element.id === props.viewType)[0];
	const [list, setList] = useState(ProductListData)
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	const dropdownMenu = row => (
		<Menu>
			<Menu.Item onClick={() => viewDetails(row)}>
				<Flex alignItems="center">
					<EyeOutlined />
					<span className="ml-2">Modificar</span>
				</Flex>
			</Menu.Item>
			<Menu.Item onClick={() => deleteRow(row)}>
				<Flex alignItems="center">
					<DeleteOutlined />
					<span className="ml-2">{selectedRows.length > 0 ? `Eliminar (${selectedRows.length})` : 'Eliminar'}</span>
				</Flex>
			</Menu.Item>
		</Menu>
	);
	
	const addTransaction = () => {
		history.push(`/app/dashboards/personal/expense/add-expense`)
	}
	
	const viewDetails = row => {
		history.push(`/app/apps/ecommerce/edit-product/${row.id}`)
	}
	
	const deleteRow = row => {
		const objKey = 'id'
		let data = list
		if(selectedRows.length > 1) {
			selectedRows.forEach(elm => {
				data = utils.deleteArrayRow(data, objKey, elm.id)
				setList(data)
				setSelectedRows([])
			})
		} else {
			data = utils.deleteArrayRow(data, objKey, row.id)
			setList(data)
		}
	}

	const setTableColumns = (tittleItems) => {
		if (tittleItems.id === "RevPersonal" || 
			tittleItems.id == "ExpenPersonal" || 
			tittleItems.id === "RevPS" ||
			tittleItems.id === "COGS" || 
			tittleItems.id === "SGA" ||
			tittleItems.id === "Capex" ||
			tittleItems.id === "CXC" ||
			tittleItems.id === "CXP") {
			return [
				{
					title: 'ID',
					dataIndex: 'id'
				},
				{
					title: tittleItems.column1,
					dataIndex: 'desc',
					sorter: (a, b) => utils.antdTableSorter(a, b, 'desc')
				},
				{
					title: tittleItems.column2,
					dataIndex: 'date',
					sorter: (a, b) => utils.antdTableSorter(a, b, 'date')
				},
				{
					title: tittleItems.column3,
					dataIndex: 'price',
					render: price => (
						<div>
							<NumberFormat
								displayType={'text'} 
								value={(Math.round(price * 100) / 100).toFixed(2)} 
								prefix={'$'} 
								thousandSeparator={true} 
							/>
						</div>
					),
					sorter: (a, b) => utils.antdTableSorter(a, b, 'price')
				},
				{
					title: tittleItems.column4,
					dataIndex: 'origin',
					sorter: (a, b) => utils.antdTableSorter(a, b, 'origin')
				},
				{
					title: tittleItems.column5,
					dataIndex: 'destiny',
					sorter: (a, b) => utils.antdTableSorter(a, b, 'destiny')
				},
				{
					title: tittleItems.column6,
					dataIndex: 'currency',
					sorter: (a, b) => utils.antdTableSorter(a, b, 'currency')
				},
				{
					title: '',
					dataIndex: 'actions',
					render: (_, elm) => (
						<div className="text-right">
							<EllipsisDropdown menu={dropdownMenu(elm)}/>
						</div>
					)
				}
			]
		}
	}

	const tableColumns = (progress) => [
		{
			title: 'ID',
			dataIndex: 'id'
		},
		{
			title: 'Ingreso',
			dataIndex: 'name',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'name')
		},
		{
			title: 'Fecha',
			dataIndex: 'category',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'category')
		},
		{
			title: 'Monto',
			dataIndex: 'price',
			render: price => (
				<div>
					<NumberFormat
						displayType={'text'} 
						value={(Math.round(price * 100) / 100).toFixed(2)} 
						prefix={'$'} 
						thousandSeparator={true} 
					/>
				</div>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'price')
		},
		{
			title: 'Origen',
			dataIndex: 'stock',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'stock')
		},
		{
			title: 'Destino',
			dataIndex: 'destiny',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'stock')
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<EllipsisDropdown menu={dropdownMenu(elm)}/>
				</div>
			)
		}
	];
	
	const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		}
	};

	const onSearch = e => {
		const value = e.currentTarget.value
		const searchArray = e.currentTarget.value? list : ProductListData
		const data = utils.wildCardSearch(searchArray, value)
		setList(data)
		setSelectedRowKeys([])
	}

	return (
		<Card>
			<Flex alignItems="center" justifyContent="between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					<div className="mr-md-3 mb-3">
						<Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
					</div>
					<div className="mb-3">
						
					</div>
				</Flex>
				<div>
					<Button onClick={addTransaction} type="primary" icon={<PlusCircleOutlined />} block>Añadir Egreso</Button>
				</div>
			</Flex>
			<div className="table-responsive">
				<Table 
					columns={setTableColumns(tittleListConst)} 
					dataSource={list} 
					rowSelection={{
						selectedRowKeys: selectedRowKeys,
						type: 'checkbox',
						preserveSelectedRowKeys: false,
						...rowSelection,
					}}
				/>
			</div>
		</Card>
	)
}

export default ExpenseDetail
