import { useState, useEffect } from "react"

function GetApi() {

  const [data, setData] = useState([])
  const [CityName, setName] = useState("");
  const [countryId, setCountry] = useState("")
  const [cityId, setCityId] = useState('')
  const [cityInfo, setCityInfo] = useState({})

  useEffect(() => {
    fetch("http://192.168.0.73:4000/api/city/getCity").then((result) => {
      result.json().then(res => {
        setData(res)
      })
    })
  }, [])

  function getList() {
    fetch("http://192.168.0.73:4000/api/city/getCity").then((result) => {
      console.log(result);
      result.json().then(res => {
        setData(res)
      })
    })
  }

  function deleteCity(id) {
    console.log(id);
    fetch(`http://192.168.0.73:4000/api/city/delete/${id}`, {
      method: "DELETE",

    }).then(result => {
      result.json().then(res => {
        getList()
      })
    })
  }

  function getDataForUpdate(city) {
    setName(city.CityName)
    setCountry(city.countryId.CounteryName)
    setCityId(city._id)
  }

  function onUpdate() {
    let updatedCity = {CityName, countryId, cityId};
    console.log(updatedCity);
    fetch(`http://192.168.0.73:4000/api/city/update/${cityId}`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
      "Content-type": "application/json"
      },
      body: JSON.stringify(updatedCity)
    }).then(result => {
      result.json().then(res => {
        console.log(res);
        getList()
      })
    })
  }

  return (
    <div>
      <table border="1" style={{ float: "left", margin: 20 }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.CityName}</td>
                <td>{item.countryId.CounteryName}</td>
                <td><button onClick={() => deleteCity(item._id)}>Delete</button></td>
                <td><button onClick={() => getDataForUpdate(item)}>Update</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
      <div style={{margin: 20}}>
        <input value={CityName } type="text" onChange={(e) => setName(e.target.value)} /><br></br><br></br>
        <input value={countryId } type="text" onChange={(e) => setCountry(e.target.value)} /><br></br><br></br>
        <button onClick={onUpdate}>Update Data</button>
      </div>
    </div>
  )
}

export default GetApi;