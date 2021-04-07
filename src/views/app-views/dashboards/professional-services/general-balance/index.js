import { Row } from 'antd'
import React from 'react'
import ChartWidget from '../../../../../components/shared-components/ChartWidget'
import CustomStatistic from '../../../../../components/shared-components/CustomStatistic'
import DonutChartWidget from '../../../../../components/shared-components/DonutChartWidget'
import StatisticWidget from '../../../../../components/shared-components/StatisticWidget'
import Flex from '../../../../../components/shared-components/Flex'
import { Card, Col, Badge } from 'antd'

import rootSaga from 'redux/sagas/Auth'
 const generalBalance = () => {
    

    //Barrasdeingresosversusegresos
	const uniqueVisitorsData = {
		series: [
			{
				name: "Ingresos",
				data: [950000, 750000, 820000, 500000]
			},
			{
				name: "Egresos",
				data: [680000, 560000, 900000, 450000]
			}
		],
		categories:[
			'Enero', 
			'Febrero', 
			'Marzo', 
			'Abril', 
			
		]
	}

	const uniqueVisitorsData2 = {
		series: [
			{
				name: "Ingresos",
				data: [950000, 750000, 820000, 500000]
			}
		],
		categories:[
			'Enero', 
			'Febrero', 
			'Marzo', 
			'Abril', 
			
		]
	}

    const sessionColor = ['#ffc107', '#3e82f7', '#04d182']
	const sessionData = [3500000, 5700000, 2400000]
	const sessionLabels = ["SG&A", "COGS", "Planilla"]
	const jointSessionData = () => {
		let arr = []
		for (let i = 0; i < sessionData.length; i++) {
			const data = sessionData[i];
			const label = sessionLabels[i];
			const color = sessionColor[i]
			arr = [...arr, {
				data: data,
				label: label,
				color: color
			}]
		}
		return arr
	}

	return (    
            <div>
                <row>
				<div className="d-flex align-items-center">
					<div className="mr-5">
						<CustomStatistic size={'lg'} value={'Enero 2021'} title={''}/>
						<CustomStatistic size={'sm'} value={'Ingresos'} title={'950000'}/>
						<CustomStatistic size={'sm'} value={'COGS'} title={'250000'}/>
						<CustomStatistic size={'sm'} value={'Planilla'} title={'300000'}/>
						<CustomStatistic size={'sm'} value={'SG&A'} title={'130000'}/>
						<CustomStatistic size={'sm'} value={'CAPEX'} title={'0'}/>
						<CustomStatistic size={'lg'} value={'Ganancia'} title={'270000'}/>
					</div>

					<div className="mr-5">
						<CustomStatistic size={'md'} value={'Febrero 2021'} title={''}/>
						<CustomStatistic size={'sm'} value={'Ingresos'} title={'950000'}/>
						<CustomStatistic size={'sm'} value={'COGS'} title={'250000'}/>
						<CustomStatistic size={'sm'} value={'Planilla'} title={'300000'}/>
						<CustomStatistic size={'sm'} value={'SG&A'} title={'130000'}/>
						<CustomStatistic size={'sm'} value={'CAPEX'} title={'0'}/>
						<CustomStatistic size={'lg'} value={'Ganancia'} title={'270000'}/>
					</div>

					<div className="mr-5">
						<CustomStatistic size={'lg'} value={'Marzo 2021'} title={''}/>
						<CustomStatistic size={'sm'} value={'Ingresos'} title={'950000'}/>
						<CustomStatistic size={'sm'} value={'COGS'} title={'250000'}/>
						<CustomStatistic size={'sm'} value={'Planilla'} title={'300000'}/>
						<CustomStatistic size={'sm'} value={'SG&A'} title={'130000'}/>
						<CustomStatistic size={'sm'} value={'CAPEX'} title={'0'}/>
						<CustomStatistic size={'lg'} value={'Ganancia'} title={'270000'}/>
					</div>
					<div className="mr-5">
						<CustomStatistic size={'lg'} value={'Abril 2021'} title={''}/>
						<CustomStatistic size={'sm'} value={'Ingresos'} title={'950000'}/>
						<CustomStatistic size={'sm'} value={'COGS'} title={'250000'}/>
						<CustomStatistic size={'sm'} value={'Planilla'} title={'300000'}/>
						<CustomStatistic size={'sm'} value={'SG&A'} title={'130000'}/>
						<CustomStatistic size={'sm'} value={'CAPEX'} title={'0'}/>
						<CustomStatistic size={'lg'} value={'Ganancia'} title={'270000'}/>
					</div>
					
				</div>
				</row>

                <row>
		            <ChartWidget 
			            series={uniqueVisitorsData.series} 
			            xAxis={uniqueVisitorsData.categories} 
			            title="Ingresos Versus Egregos"
			            height={410}
			            type="bar"
			            customOptions={
				        {
					        colors: ['#04d182' ,'#ff6b72' ]
				        }
			            }
			
		            />
                </row>
                <row>
                    <DonutChartWidget 
			            series={sessionData} 
			            labels={sessionLabels} 
			            title="Egresos"
			            customOptions={{colors: sessionColor}}
			                extra={
				            <Row  justify="center">
					        <Col xs={20} sm={20} md={20} lg={24}>
						    <div className="mt-4 mx-auto" style={{maxWidth: 200}}>
							{jointSessionData().map(elm => (
								<Flex alignItems="center" justifyContent="between" className="mb-3" key={elm.label}>
									<div>
										<Badge color={elm.color} />
										<span className="text-gray-light">{elm.label}</span>
									</div>
									<span className="font-weight-bold text-dark">{elm.data}</span>
								</Flex>
							))}
						    </div>
					        </Col>
				            </Row>
			                }
		            />
                </row>

				<row>
		            <ChartWidget 
			            series={uniqueVisitorsData2.series} 
			            xAxis={uniqueVisitorsData2.categories} 
			            title="Ingresos"
			            height={410}
			            type="bar"
			            customOptions={
				        {
					        colors: ['#04d182']
				        }
			            }
			
		            />
                </row>




				
        </div>
	)
}

export default generalBalance