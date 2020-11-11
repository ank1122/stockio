<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  <!-- <div class="wrapper">
    <label>Search Warehouses name:</label>
    <input type="text" v-model="search" placeholder="Search title.."/>
    
  </div> -->

   <div class="panel panel-default">
   <div class="panel-heading">
         <strong> Search Warehouses</strong></div>
            <div class="row">
                 <div class="search-wrapper panel-heading col-sm-12">
                     <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
                </div>                        
            </div>
            
        <div class="table-responsive">
            <table v-if="resources.length" class="table">
                <thead>
                    <tr>
                         <th>All Warehouses List</th>
                    </tr>
                </thead>
                <div class="wrapper">
                    <div class="card" v-for="item in resultQuery" :key="item">
                        <a v-bind:href="component ='/edit' " target="_blank">
                        <small>Space_available: {{ item.space_available }}</small>
                            {{ item.name}}
                        <small>{{ item.city }}</small>
                        </a>
                    </div>     
                  </div>
            </table>
        </div>
        
   </div>
  
   </div>
  
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data(){
    return{
      searchQuery: null,
        resources:[
              {
                "name" : "Warehouse-165",
                "code" : "W-00001",
                "id" : 1,
                "city": "Delhi",
                "space_available": 1234,
                "type" : "Leasable Space",
                "cluster" : "cluster-a-32",
                "is_registered" : true,
                "is_live" : false
              },
              {
                "name" : "Warehouse-276",
                "code" : "W-00002",
                "id" : 2,
                "city": "Chennai",
                "space_available": 124,
                "type" : "Warehouse Service",
                "cluster" : "cluster-a-1",
                "is_registered" : true,
                "is_live" : false
              },
              {
                "name" : "Warehouse-3039",
                "code" : "W-00003",
                "id" : 3,
                "city": "Indore",
                "space_available": 134,
                "type" : "Warehouse Service",
                "cluster" : "cluster-a-1",
                "is_registered" : true,
                "is_live" : false
              },
              {
                "name" : "Warehouse-324",
                "code" : "W-00004",
                "id" : 4,
                "city": "Chennai",
                "space_available": 12,
                "type" : "Leasable Space",
                "cluster" : "cluster-a-21",
                "is_registered" : true,
                "is_live" : false
              },
              {
                "name" : "Warehouse-5454",
                "code" : "W-00005",
                "id" : 5,
                "city": "Chennai",
                "space_available": 1243434,
                "type" : "Warehouse Service",
                "cluster" : "cluster-a-21",
                "is_registered" : true,
                "is_live" : false
              },
              {
                "name" : "Warehouse-4345",
                "code" : "W-00006",
                "id" : 6,
                "city": "Chennai",
                "space_available": 1,
                "type" : "Leasable Space",
                "cluster" : "cluster-a-21",
                "is_registered" : true,
                "is_live" : false
              },
              {
                "name" : "Warehouse-3455",
                "code" : "W-00007",
                "id" : 7,
                "city": "Mumbai",
                "space_available": 4,
                "type" : "Leasable Space",
                "cluster" : "cluster-a-2",
                "is_registered" : true,
                "is_live" : false
              },
              {
                "name" : "Warehouse-23455",
                "code" : "W-00008",
                "id" : 8,
                "city": "Bangalore",
                "space_available": 3456,
                "type" : "Warehouse Service",
                "cluster" : "cluster-a-21",
                "is_registered" : true,
                "is_live" : true
              },
              {
                "name" : "Warehouse-6457",
                "code" : "W-00009",
                "id" : 9,
                "city": "Bangalore",
                "space_available": 1234545,
                "type" : "Warehouse Service",
                "cluster" : "cluster-a-1",
                "is_registered" : true,
                "is_live" : false
              },
              {
                "name" : "Warehouse-32456",
                "code" : "W-000010",
                "id" : 10,
                "city": "Guwahati",
                "space_available": 121234,
                "type" : "Warehouse Service",
                "cluster" : "cluster-a-1",
                "is_registered" : true,
                "is_live" : true
              },
              {
                "name" : "Warehouse-3245678",
                "code" : "W-000011",
                "id" : 11,
                "city": "Delhi",
                "space_available": 98,
                "type" : "Leasable Space",
                "cluster" : "cluster-v-2",
                "is_registered" : true,
                "is_live" : false
              },
              {
                "name" : "Warehouse-4567",
                "code" : "W-000012",
                "id" : 12,
                "city": "Indore",
                "space_available": 97,
                "type" : "Warehouse Service",
                "cluster" : "cluster-a-1",
                "is_registered" : true,
                "is_live" : true
              },
              {
                "name" : "Warehouse-458",
                "code" : "W-000013",
                "id" : 13,
                "city": "Delhi",
                "space_available": 654,
                "type" : "Leasable Space",
                "cluster" : "cluster-a-1",
                "is_registered" : true,
                "is_live" : false
              }
          ]
      };
    },
  computed:{
    resultQuery(){
      if(this.searchQuery){
      return this.resources.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
      })
      }else{
        return this.resources;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

html, body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
}
 .wrapper {
    display: flex;
    max-width: 444px;
    flex-wrap: wrap;
    padding-top: 12px;
  }
  .card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    max-width: 140px;
    margin: 12px;
    transition: .15s all ease-in-out;
  }

</style>
