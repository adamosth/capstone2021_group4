from __future__ import print_function
from os import getenv

NAME="AdamCapstone2021_group4"
EXPT_UID="f399dc54d8b5f2f78201091304df3676"
RESULTS_DIR="2021/AdamCapstone2021_group4/results"

RESTRICTIONS = [] # ["IE", "mobile", "tablet", "tv"]

# AWS Settings
AWS_DEFAULT_REGION = 'us-west-2'

# SimpleDB databases for experiments and participants
SDB_EXPERIMENTS = "mall_experiments"
SDB_EXPERIMENTS_PARTICIPANTS = "mall_experiments_participants"

# variable for REP crediting
REP_ON_CONSENT = False                                                       #both XXXX need to be replaced
REP_URL = 'https://unimelb.sona-systems.com/services/SonaAPI.svc/WebstudyCredit?experiment_id=XXXX&credit_token=XXXX&survey_code={}'


DEBUG = True
if getenv('ExptEnv') == 'Production':
    DEBUG = False

if __name__ == "__main__":
    print(EXPT_UID)
