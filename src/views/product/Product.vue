<template>
  <div style="height: 100%" class="flex justify-center">
    <ag-grid-vue
      style="width: 80%; height: 90vh"
      class="ag-theme-material mt-8"
      :gridOptions="gridOptions"
      :rowData="rowData"
      :rowDataChanged="onRowDataChanged"
      @filter-opened="onFilterOpened"
      @filter-changed="onFilterChanged"
      @filter-modified="onFilterModified"
    ></ag-grid-vue>
  </div>
</template>
<script>
//  @grid-ready="onGridReady"
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridVue } from "ag-grid-vue3";
import ProductApi from "@/server/api/productApi";
export default {
  name: "App",
  components: {
    AgGridVue,
  },
  data() {
    return {
      gridOptions: null,
      rowData: null,
      productApi: new ProductApi(),
    };
  },
  components: {
    AgGridVue,
  },
  methods: {
    async loadRowData() {
      await this.productApi.getProducts().then((res) => {
        console.log(res, "prod list");
        this.rowData = res;
      });
      // .then((response) => {
      //   return response.json();
      // })
      // .then((json) => {
      //   this.rowData = json;
      // });
    },
    createColDefs() {
      return [
        {
          headerName: "PROD_ID",
          field: "PROD_ID",
          width: 225,
          suppressSizeToFit: true,
          filter: "agNumberColumnFilter",
        },
        { headerName: "PROD_DESC_ERP", field: "PROD_DESC_ERP" },
        { headerName: "PROD_EXTRA_DESC_ERP", field: "PROD_EXTRA_DESC_ERP" },
        { headerName: "PROD_SLS_CAT_ID", field: "PROD_SLS_CAT_ID" },
        { headerName: "PROD_CAT_PRC", field: "PROD_CAT_PRC" },
        { headerName: "PROD_MKT_CAT_ID", field: "PROD_MKT_CAT_ID" },
        { headerName: "PROD_BRAND", field: "PROD_BRAND" },
        { headerName: "SEARCH_DISPLAY_IN", field: "SEARCH_DISPLAY_IN" },
      ];
    },
    onRowDataChanged() {
      Vue.nextTick(() => {
        this.gridOptions.api.sizeColumnsToFit();
      });
    },
    onFilterOpened(e) {
      console.log("onFilterOpened", e);
    },
    onFilterChanged(e) {
      console.log("onFilterChanged", e);
      // console.log("gridApi.getFilterModel() =>", e.api.getFilterModel());
    },
    onFilterModified(e) {
      console.log("onFilterModified", e);
      //   console.log("filterInstance.getModel() =>", e.filterInstance.getModel());
      //   console.log(
      //     "filterInstance.getModelFromUi() =>",
      //     e.filterInstance.getModelFromUi()
      //   );
    },
  }, //methods
  created() {
    this.gridOptions = {};
    this.gridOptions.columnDefs = this.createColDefs();
    this.loadRowData();
  },
};
</script>
