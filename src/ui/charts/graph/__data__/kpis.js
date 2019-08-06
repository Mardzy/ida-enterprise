import { fromJS } from "immutable";

export default fromJS({
  "labels": {
    "IpsumDolor": "Ipsum dolor",
    "DiamSapien": "Diam sapien"
  },
  "columns": ["IpsumDolor", "DiamSapien"],
  "farms": [{
    "name": "Romme",
    "kpi": [{
      "id": "IpsumDolor",
      "value": 123.3
    }, {
      "id": "DiamSapien",
      "value": 49.2
    }]
  }, {
    "name": "Rutten",
    "kpi": [{
      "id": "IpsumDolor",
      "value": 148.7
    }, {
      "id": "DiamSapien",
      "value": 23.8
    }]
  }, {
    "name": "Tankink",
    "kpi": [{
      "id": "IpsumDolor",
      "value": 125.1
    }, {
      "id": "DiamSapien",
      "value": 18.3
    }]
  }]
});