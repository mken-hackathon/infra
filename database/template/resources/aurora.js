"use strict";
const config = require("config");

module.exports = {
  RDSCluster: {
    Type: "AWS::RDS::DBCluster",
    Properties: {
      DatabaseName: config.rds.dbname,
      MasterUsername: config.rds.username,
      MasterUserPassword: config.rds.password,
      Engine: "aurora",
      VpcSecurityGroupIds: [{ Ref: "RDSSecurityGroup" }],
      DBSubnetGroupName: { Ref: "RDSMultiAZSubnetGroup" },
      DBClusterParameterGroupName: { Ref: "RDSClusterParameterGroup" },
      StorageEncrypted: true
    }
  },
  RDSInstance: {
    Type: "AWS::RDS::DBInstance",
    Properties: {
      AvailabilityZone: "ap-northeast-1a",
      DBInstanceIdentifier: `qrc-${config.tags.Stage}`,
      DBSubnetGroupName: { Ref: "RDSMultiAZSubnetGroup" },
      Engine: "aurora",
      DBClusterIdentifier: { Ref: "RDSCluster" },
      DBInstanceClass: config.rds.instance_size,
      PubliclyAccessible: true
    }
  },
  RDSMultiAZSubnetGroup: {
    Type: "AWS::RDS::DBSubnetGroup",
    Properties: {
      DBSubnetGroupDescription: "Enable RDS Access",
      SubnetIds: config.subnet_ids
    }
  },
  RDSSecurityGroup: {
    Type: "AWS::EC2::SecurityGroup",
    Properties: {
      GroupDescription: "Enable DB Access",
      VpcId: config.vpc_id,
      SecurityGroupIngress: [
        {
          IpProtocol: "tcp",
          CidrIp: "0.0.0.0/0",
          FromPort: 3306,
          ToPort: 3306
        }
      ]
    }
  },
  RDSClusterParameterGroup: {
    Type: "AWS::RDS::DBClusterParameterGroup",
    Properties: {
      Description: `${config.prefix} Cluster ParameterGroup`,
      Parameters: {
        character_set_client: "utf8",
        character_set_connection: "utf8",
        character_set_database: "utf8",
        character_set_filesystem: "binary",
        character_set_results: "utf8",
        character_set_server: "utf8",
        time_zone: "Asia/Tokyo"
      },
      Family: "aurora5.6"
    }
  }
};
