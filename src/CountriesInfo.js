

function CountriesInfo({resultData}){

    let name = resultData.name,
        date = resultData?.timeline?.[0]?.date,
        confirmed = resultData?.latest_data?.confirmed,
        recovered = resultData?.latest_data?.recovered,
        deaths = resultData?.latest_data?.deaths,
        newConfirmed = resultData?.timeline?.[0]?.new_confirmed,
        newRecovered = resultData?.timeline?.[0]?.new_recovered,
        newDeaths = resultData?.timeline?.[0]?.new_deaths;

    return (
        <div className="generalInfo">
            <div>
                <div>
                    <h4>{name}</h4>
                    <p>{confirmed}</p>
                </div>
                <div>
                    <p>{resultData !== "" ? "date:" : ""}</p>
                    <p>{date}</p>
                </div>
            </div>
            <div>
                <h4>{resultData !== "" ? "recovered:" : ""}</h4>
                <p>{recovered}</p>
                <p>{resultData !== "" ? "deaths:" : ""}</p>
                <p>{deaths}</p>
            </div>
            <div>
                <h4>{resultData !== "" ? "Today" : ""}</h4>
                <p>{resultData !== "" ? "confirmed:" : ""}</p>
                <p>{newConfirmed}</p>
                <p>{resultData !== "" ? "recovered:" : ""}</p>
                <p>{newRecovered}</p>
                <p>{resultData !== "" ? "deaths:" : ""}</p>
                <p>{newDeaths}</p>
            </div>
        </div>
    )
}

export default CountriesInfo;