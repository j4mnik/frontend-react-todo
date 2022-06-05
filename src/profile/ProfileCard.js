function ProfileCard(props) {

    const dateFormat = (d) => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let months = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September",
            "October", "November", "December"];

        let day = days[d.getDay()]
        let date = d.getDate();
        let month = months[d.getMonth()];


        return `${day} ${date} ${month}`

    }

    return (
        <div className="grid grid-cols-3 text-center">
            <h1 className="px-2">{props.name}</h1>
            <h1>{props.priority}</h1>
            <h1>{dateFormat(new Date(props.createdAt))}</h1>
        </div>
    )

}

export default ProfileCard;