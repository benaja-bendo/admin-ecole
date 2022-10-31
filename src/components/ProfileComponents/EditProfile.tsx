import {useSelector} from "react-redux";
import {UserModel} from "../../models/UserModel";
import {Radio, Textarea, TextField, Typography} from "@mui/joy";
import React, {useState} from "react";

export default function EditProfile() {
    const user = useSelector((state: any) => state.user as UserModel);
    const [selectedValue, setSelectedValue] = useState(user.genre);

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div className="h-full grid grid-cols-3">
            <div className="col-span-3 md:col-span-1 xl:col-span-1">
                <div className="flex flex-col justify-center items-center">
                    <img src={user.image_path} alt="avatar" className="w-32 h-32 rounded-full object-cover"/>
                    <div className="mt-2">
                        <input name="file" id="file" type={"file"}
                               accept={"image/png, image/jpeg, image/jpg"}
                               className="w-1 h-1 opacity-0 overflow-hidden absolute z-1"/>
                        <label htmlFor="file"
                               className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center">
                            choisir une image
                        </label>
                    </div>
                    <div className="mb-2">
                        <Typography level="h4" component="h4" className="font-bold">Roles</Typography>
                        {user.roles.map((role, index) => <Typography key={index} level="body1"
                                                                        component="p">{role.name}</Typography>)}
                    </div>
                </div>
            </div>
            <div className="col-span-3 md:col-span-2 xl:col-span-2">
                <div className="mb-2">
                    <TextField
                        label="Nom du cours"
                        value={user.name}
                        variant="soft"/>
                </div>
                <div className="flex gap-1">
                    <div className="mb-2">
                        <TextField
                            label="first name"
                            value={user.first_name}
                            variant="soft"/>
                    </div>
                    <div className="mb-2">
                        <TextField
                            label="last name"
                            value={user.last_name}
                            variant="soft"/>
                    </div>
                </div>
                <div className="mb-2">
                    <TextField
                        label="email"
                        value={user.email}
                        disabled={true}
                        variant="soft"/>
                </div>
                <div className="mb-2">
                    <TextField
                        label="phone"
                        value={user.phone}
                        variant="soft"/>
                </div>
                <div className="mb-2">
                    <TextField
                        label="address"
                        value={user.address}
                        variant="soft"/>
                </div>
                <div className="mb-2">
                    <TextField
                        label="city"
                        value={user.city}
                        variant="soft"/>
                </div>
                <div className="mb-2">
                    <span className="text-gray-700">genre</span>
                    <div className="flex gap-2">
                        <Radio
                            checked={selectedValue === 'M'}
                            onChange={handleChange}
                            value="M"
                            label="Homme"
                            name="radio-buttons"
                            componentsProps={{input: {'aria-label': 'M'}}}
                        />
                        <Radio
                            checked={selectedValue === 'F'}
                            onChange={handleChange}
                            value="F"
                            label="femme"
                            name="radio-buttons"
                            componentsProps={{input: {'aria-label': 'F'}}}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}