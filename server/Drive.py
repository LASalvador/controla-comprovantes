from __future__ import print_function
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.http import MediaFileUpload

class Drive:
    SCOPES = ['https://www.googleapis.com/auth/drive']
    def __init__(self):
        self.__service = self.__getCreds()

    def __getCreds(self):
        creds = None
        # The file token.pickle stores the user's access and refresh tokens, and is
        # created automatically when the authorization flow completes for the first
        # time.
        if os.path.exists('token.pickle'):
            with open('token.pickle', 'rb') as token:
                creds = pickle.load(token)
        # If there are no (valid) credentials available, let the user log in.
        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(
                    'credentials.json', SCOPES)
                creds = flow.run_local_server(port=0)
            # Save the credentials for the next run
            with open('token.pickle', 'wb') as token:
                pickle.dump(creds, token)

        service = build('drive', 'v3', credentials=creds)
        return service

    def mkdir(self, dir_name):
        file_metadata = {
            'name': dir_name,
            'mimeType': 'application/vnd.google-apps.folder'
        }
        folder = self.__service.files().create(body=file_metadata,
                                        fields='id').execute()
        return folder.get('id')

    def uploadFile(self, file_path, file_name ,folder_id):
        file_metadata = {
            'name': file_name,
            'parents': [folder_id]
        }
        media = MediaFileUpload(file_path,
                            mimetype='text/plain',
                            resumable=True)
        file = self.__service.files().create(body=file_metadata,
                                        media_body=media,
                                        fields='id').execute()
        return file.get('id')

    def getFolderId(self, dir_name):
        dirs = self.__service.files().list(q="mimeType='application/vnd.google-apps.folder'", fields='files(id, name)').execute()
        folder = next((item for item in dirs['files'] if item["name"] == dir_name), False)
        return folder['id']

    def tdir(self, dir_name):
        dirs = self.__service.files().list(q="mimeType='application/vnd.google-apps.folder'", fields='files(id, name)').execute()
        return next((True for item in dirs['files'] if item["name"] == dir_name), False)
