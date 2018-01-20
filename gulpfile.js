"use strict";

const gulp = require('gulp'),
      fs = require('fs'),
      pug = require('pug'),
      PathToOutJSON = './output/log.json';

gulp.task('report', function() {
    if (fs.existsSync(PathToOutJSON)) {
        const out = require('./output/log.json');

        //I need this, because I don't need so many things for reporting
        let features = [];

        out.forEach((feature)=> {
            let scenarios = [],
                passed_tst = 0,
                failed_tst = 0;

            let res = feature.elements.forEach(scenario => {
                let scenarioRes = {'name': scenario.name};
                scenarioRes.result = scenario.steps.every(step => {
                    if (step.result.status === 'failed') {
                        scenarioRes.error_message = step.result.error_message;
                        return false;
                    }
                    return true;
                });
                scenarioRes.result ? passed_tst++ : failed_tst++;
                scenarios.push(scenarioRes);
            });
            features.push({
                name: feature.name,
                result: scenarios.every(scenario => scenario.result),
                scenarios: scenarios,
                passed_tst,
                failed_tst
            });
        });

        fs.writeFile('report.html', pug.renderFile('./templates/reporter-template.pug', {features: features}), (err) => {
            if (err) throw err;
        });
    }else{
        console.log("Error! You don't have file with result of tests: log.json!");
    }
});
