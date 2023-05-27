export const API_URI = {
    saveSentEmails: {
        endpoint: 'save',
        method: 'POST'
    },
    saveDraftEmails: {
        endpoint: 'save-draft',
        method: 'POST'
    },
    getEmailFromType: {
        endpoint: 'emails',
        method: 'GET'
    },
    toggleStarredMail: {
        endpoint: 'starred',
        method: 'POST'
    },
    deleteEmails: {
        endpoint: 'delete',
        method: 'DELETE'
    },
    moveEmailTOBin: {
        endpoint: 'bin',
        method: 'POST'
    }
}