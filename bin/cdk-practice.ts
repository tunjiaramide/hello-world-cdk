#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkPracticeStack } from '../lib/cdk-practice-stack';

const app = new cdk.App();
new CdkPracticeStack(app, 'CdkPracticeStack');
