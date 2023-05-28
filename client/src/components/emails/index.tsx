import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';
import { Box, List, Checkbox } from '@mui/material';

import useApi from '../../hooks/useApi';
import { API_URI } from '../../services/api.urls';
import Email from '../email';
import NoMails from '../common/NoMails';
import { EMPTY_TABS } from '../../constants';

const Emails: React.FC = () => {
    const [starredEmail, setStarredEmail] = useState(false);
    const [selectedEmails, setSelectedEmails] = useState<string[]>([]);

    const { openDrawer } = useOutletContext() as { openDrawer: boolean };
    const { type } = useParams<{ type: string }>();

    const getEmailsService = useApi(API_URI.getEmailFromType);
    const deleteEmailsService = useApi(API_URI.deleteEmails);
    const moveEmailsToBin = useApi(API_URI.moveEmailTOBin);

    useEffect(() => {
        getEmailsService.call({}, type);
    }, [type, starredEmail, getEmailsService]);

    const selectAllEmails = (e: any) => {
        if (e.target.checked) {
            const emails = getEmailsService?.response?.map((email: { _id: any; }) => email._id);
            setSelectedEmails(emails);
        } else {
            setSelectedEmails([]);
        }
    }

    const deleteSelectedEmails = () => {
        if (type === 'bin') {
            deleteEmailsService.call(selectedEmails);
        } else {
            moveEmailsToBin.call(selectedEmails);
        }
        setStarredEmail((prevState) => !prevState);
    };

    return (
        <Box style={openDrawer ? { marginLeft: 250, width: '100%' } : { width: '100%' }}>
            <Box style={{ padding: '20px 10px 0 10px', display: 'flex', alignItems: 'center' }}>
                <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
                <DeleteOutline onClick={deleteSelectedEmails} />
            </Box>
            <List>
                {getEmailsService?.response?.map((email: any) => (
                    <Email
                        email={email}
                        key={email.id}
                        setStarredEmail={setStarredEmail}
                        selectedEmails={selectedEmails}
                        setSelectedEmails={setSelectedEmails}
                    />
                ))}
            </List>
            {getEmailsService?.response === 0 && <NoMails message={EMPTY_TABS[type]} />}
        </Box>
    );
};

export default Emails;
