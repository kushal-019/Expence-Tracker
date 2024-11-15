import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const Transaction = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>
            Income
          </Tab>
          <Tab>
            Expense
          </Tab>
          <Tab>
            All
          </Tab>
        </TabList>
        <TabPanel>
          <ListTransactions category={"income"} />
        </TabPanel>

        <TabPanel>
          <ListTransactions category={"expense"} />
        </TabPanel>

        <TabPanel>
          <ListTransactions category={"all"} />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Transaction;
