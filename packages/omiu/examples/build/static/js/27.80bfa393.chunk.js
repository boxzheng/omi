webpackJsonp([27],{77:function(n,e){n.exports="## Table  \n\nData is presented and processed in the form of tables.\n\n## Usage\n\n```js\ndefine('my-app', class extends WeElement {\n  dataSource = [{\n    id: 1,\n    name: 'xwang',\n    age: 18,\n    address: 'Tencent'\n  }, {\n    id: 2,\n    name: 'dntzhang',\n    age: 12,\n    address: 'Tencent'\n  }, {\n    id: 3,\n    name: 'lucy',\n    age: 12,\n    address: 'Tencent'\n  }, {\n    id: 4,\n    name: 'john',\n    age: 12,\n    address: 'Tencent'\n  }, {\n    id: 5,\n    name: 'tim',\n    age: 12,\n    address: 'Tencent'\n  }]\n\n  columns = [{\n    title: 'Name',\n    key: 'name',\n  }, {\n    title: 'Age',\n    key: 'age',\n  }, {\n    title: 'Address',\n    key: 'address',\n  }, {\n    title: '\u64cd\u4f5c',\n    render: (item) => (\n      <span>\n        <a href=\"javascript:;\" onClick={e => { this.removeItem(item) }}>Delete</a>\n      </span>\n    )\n  }]\n\n  removeItem = (item) => {\n    this.table.removeItem(item)\n  }\n\n  render() {\n    return (\n      <o-table \n        ref={e => { this.table = e }} \n        dataSource={this.dataSource} \n        columns={this.columns}>\n      </o-table>\n    )\n  }\n})\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| dataSource  | json array |   --    |           |\n| columns  | json array |   --    |           |"}});
//# sourceMappingURL=27.80bfa393.chunk.js.map