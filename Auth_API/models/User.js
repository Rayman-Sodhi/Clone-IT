const mongoose=require("mongoose");

//User Schema
/*const lookup = async (id) => {
    const user = await db.get("userName", id);
    if (!user) {
        throw new Error("Invalid user id");
    }
};*/
//const schema = Joi.string().external(lookup);^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
//await schema.validateAsync('1234abcd');(new RegExp('^[a-zA-Z0-9]{3,30}$'))

const userSchema=new mongoose.Schema({
    name: {type: String,
    required:[true, "Must have a name"]},

    userName:{type:String,
    required:[true, "Must have a userName"],
    unique:true},

    password:{type:String,
        required:[true, "Must have a password"],
    minLength:6},

        year:{type:Number
      },

       branch:{type:String
        },

        gender:{type:String
          },

            address:{type:String
                },

               email:{type:String,
                    required:true},
    
                    phoneNo:{type:Number,
                 
         },

                otp:{type: Number,
                    required:true,
                    unique:true,
                min:1000,
                max:9999},

        isVerified:{type: Boolean,
            required:true
        },
        impwd:{type:String,
            required:[true, "Must have"],
        minLength:6
        //,select: false
    }
    });
    

    module.exports=new mongoose.model("user", userSchema);