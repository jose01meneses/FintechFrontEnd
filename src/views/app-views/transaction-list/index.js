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

const optionRevenuePF = "RevPersonal";
const optionExpensePF = "ExpenPersonal";
const optionRevenuePs = "RevPS";
const optionCOGS = "COGSPS";
const optionSGA = "SGAPS";
const optionCapex = "capitalPS";
const optionCXC = "CXCPS";
const optionCXP = "CXPPS";
const optionPayroll = "PayrollPS";

const TransactionList = (props) => {
	let history = useHistory();
	const tittleListConst = TittleList.filter(element => element.id === props.viewType)[0];
	const [list, setList] = useState(ProductListData)
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	const dropdownMenu = row => (
		<Menu>
			<Menu.Item onClick={() => editTransaction(tittleListConst.linkEdit)}>
				<Flex alignItems="center" >
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

	const editTransaction = linkTransaction => {
		window.location.href = linkTransaction;
	}
	
	const addTransaction = linkTransaction => {
		window.location.href = linkTransaction;
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
		if (tittleItems.id === optionRevenuePF || 
			tittleItems.id === optionExpensePF || 
			tittleItems.id === optionRevenuePs ||
			tittleItems.id === optionCOGS || 
			tittleItems.id === optionSGA ||
			tittleItems.id === optionCapex ||
			tittleItems.id === optionCXC ||
			tittleItems.id === optionCXP) {
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
		} else if (tittleItems.id === optionPayroll) {
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
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<EllipsisDropdown menu={dropdownMenu(elm)}/>
					</div>
				)
			}];
		}
	}
	
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
					<Button onClick={() => addTransaction(tittleListConst.link)} type="primary" icon={<PlusCircleOutlined />} block>{tittleListConst.tittleBtnAdd}</Button>
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



export default TransactionList
