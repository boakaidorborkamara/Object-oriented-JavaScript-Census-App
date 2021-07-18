
let census ={
    //get all the data from the json file
    getAllData: function(){
        fetch("./json/census.json")
        .then(res => res.json())
        .then((data)=>{
            console.log(data);
            return data;
        })
        .catch((err)=>{
            console.log(err);
        })
    },

    // calculateTotalPopulation(population_data){

    // },

    //feed the html with data
    feedAppWithData(){
        let census_data = census.getAllData();
    }

}

census.feedAppWithData();


