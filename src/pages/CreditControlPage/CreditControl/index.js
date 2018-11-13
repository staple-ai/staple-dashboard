import React from 'react'
import C3Chart from 'react-c3js'
import 'c3/c3.css'
import ChartCard from 'components/CleanComponents/ChartCard'
import { Button, Input, Icon, Table } from 'antd'
import { tableData } from './data.json'

class CreditControl extends React.Component {
  state = {
    tableData: tableData,
  }

  render() {

    let colors = {
      _primary: '#01a8fe',
      _default: '#acb7bf',
      _success: '#46be8a',
      _warning: '#F0AC4E',
      _danger: '#fb434a',
    }

    let stackedBar = {
      data: {
        columns: [
          ['Paid', 20, 200, 300, 150, 50, 150, 30, 200, 0, 0, 0, 0],
          ['Invoiced', 130, 100, 400, 100, 50, 50, 30, 100, 40, 10, 15, 50],
          ['Predicted', 0, 0, 0, 0, 250, 250, 230, 200, 20, 100, 250, 250],
        ],
        type: 'bar',
        groups: [['Paid', 'Invoiced', 'Forecast']],
      },
      color: {
        pattern: [colors._success, colors._primary, colors._default],
      },
      bar: {
        width: {
          max: 50,
        },
      },
      grid: {
        y: {
          show: !0,
          lines: [
            {
              value: 0,
            },
          ],
        },
      },
    }

    let bar = {
      data: {
        columns: [
          ['Not yet due', 5300],
          ['0-30 days late', 3208],
          ['31-60 days late', 1233],
          ['61-90 days late', 549],
          ['90+ days late', 15]
        ],
        type: 'bar',
      },
      bar: {
        width: {
          max: 50,
        },
      },
      color: {
        pattern: [colors._success, colors._primary, colors._default, colors._warning, colors._danger],
      },
      grid: {
        y: {
          show: !0,
        },
        x: {
          show: !1,
        },
      },
    }

    const tableColumns = [
      {
        title: 'Invoice',
        dataIndex: 'invoice',
        key: 'invoice',
        sorter: (a, b) => a.invoice - b.invoice,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        sorter: (a, b) => a.amount - b.amount,

      },
      {
        title: 'Customer',
        dataIndex: 'customer',
        key: 'customer',
      },
      {
        title: 'Expected date',
        dataIndex: 'expected',
        key: 'expected',
        sorter: (a, b) => a.expected - b.expected,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: text => (
          <span className={text === 'Processing' ? 'badge badge-warning' : 'badge badge-danger'}>
            {text}
          </span>
        ),
        sorter: (a, b) => a.status - b.status,
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button icon="eye" className="mr-1" size="small">
              View
            </Button>
            <Button icon="upload" className="mr-1" size="small">
              Assign
            </Button>
            <Button icon="checkmark-circle" className="mr-1" size="small">
              Clear
            </Button>
          </span>
        ),
      },
    ]

    return (
      <div>
        <div className="utils__title utils__title--flat mb-3">
          <span className="text-uppercase font-size-16">Credit Control Metrics</span>
        </div>
        <div className="row">
          <div className="col-xl-3">
            <ChartCard
              title={'Overdue Invoices'}
              amount={'25'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [2, 11, 8, 14, 18, 20, 26],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-3">
            <ChartCard
              title={'Overdue Balance'}
              amount={'$1,100'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [20, 80, 67, 120, 132, 66, 97],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-3">
            <ChartCard
              title={'Outstanding Invoices'}
              amount={'324'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [42, 40, 80, 67, 84, 20, 97],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-3">
            <ChartCard
              title={'Outstanding Balance'}
              amount={'$24,492'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [42, 40, 80, 67, 84, 20, 97],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3">
            <ChartCard
              title={'Disputed Invoices'}
              amount={'5'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [2, 11, 8, 14, 18, 20, 26],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-3">
            <ChartCard
              title={'Collected in Last 7 Days'}
              amount={'$1,240'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [20, 80, 67, 120, 132, 66, 97],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-3">
            <ChartCard
              title={'Average Collection'}
              amount={'32 Days'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [42, 40, 80, 67, 84, 20, 97],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-3">
            <ChartCard
              title={'Customers Over Limit'}
              amount={'4'}
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [42, 40, 80, 67, 84, 20, 97],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="utils__title">Cash Collection Profile</div>
            <div className="utils__titleDescription">
              Forecasted invoice collection based on historical invoicing and predicted invoicing
            </div>
            <div className="mb-5">
              <C3Chart
                data={stackedBar.data}
                color={stackedBar.color}
                bar={stackedBar.bar}
                grid={stackedBar.grid}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="utils__title">Aged Debtor Profile</div>
              <div className="utils__titleDescription">
                Historical profile of aged debtors
              </div>
            <div className="mb-5">
              <C3Chart data={bar.data} color={bar.color} grid={bar.grid} bar={bar.bar} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">Outstanding Invoices</div>
                <div className="utils__titleDescription">
                  Outstanding, overdue and disputed invoices requiring your attention
                </div>
              </div>
              <div className="card-body">
                <Table
                  columns={tableColumns}
                  dataSource={this.state.tableData}
                  pagination={false}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default CreditControl
