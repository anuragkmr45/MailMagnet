import Email from "../model/email.js";

export const saveSendEmail = async (req, res) => {
    try {
        const email = await new Email(req.body);
        email.save();

        res.status(200).json("email saved successfully");
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const getEmails = async (req, res) => {
    try {
        let emails;

        if (req.params.type === 'startted') {
            emails = await Email.find({
                startted: true,
                bin: false
            });
        } else if (req.params.type === 'bin') {
            emails = await Email.find({
                bin: true
            });
        } else if (req.params.type === 'allmail') {
            emails = await Email.find({});
        } else if (req.params.type === 'inbox') {
            emails = [];
        } else {
            emails = await Email.find({
                type: req.params.type
            })
        }

        res.status(200).json(emails);

    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const toggleStarredEmail = async (req, res) => {
    try {
        await Email.updateOne(
            {
                _id: req.body.id
            },
            {
                $set:
                {
                    starred: req.body.value
                }
            }
        )
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const deleteEmail = async (req, res) => {
    try {
        await Email.deleteMany({ _id: { $in: req.body } })

        res.status(200).json('email deleted successfully')
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const moveEmailToBin = async (req, res) => {
    try {
        await Email.updateMany(
            {
                _id:
                {
                    $in: request.body
                }
            },
            {
                $set:
                {
                    bin: true,
                    starred: false,
                    type: ''
                }
            }
        )
    } catch (error) {
        res.status(500).json(error.message);
    }
}