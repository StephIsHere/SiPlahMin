import userService from "../services/user-service.js";

const getUser = async (req,res) => {
    try{
        const data = await userService.getUser();
        res.status(200).json({data});
    } catch (err) {
        res.status(500).json({ error: err.message });
        
    }
};

export default { getUser };