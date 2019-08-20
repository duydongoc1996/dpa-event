-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: event
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `full_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (5,'applecook','$2b$10$gvxTqWV8PA7P84n09dSrU.bZP.CGqvZGEKjRQ.u0aRes0Uj/Xqs76','Admin');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attendee`
--

DROP TABLE IF EXISTS `attendee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attendee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `prefix` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `company_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `job_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nationality` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendee`
--

LOCK TABLES `attendee` WRITE;
/*!40000 ALTER TABLE `attendee` DISABLE KEYS */;
INSERT INTO `attendee` VALUES (1,'ABC','ms','do','duy','fds','it','vn','duydo@fds','1234567899'),(2,'ABC','ms','do','duy','fds','it','vn','duydo@fds','1234567899'),(3,'ABC','ms','do','duy','fds','it','vn','duydo@fds','1234567899'),(4,'ABC','mr','duy','do','fds','it','vn','duydo@fds','1234567890'),(5,'ABC','mr','duy','do','fds','it','vn','duydo@fds','1234567890'),(6,'ABC','mr','duy','do','fds','it','vn','duydo@fds','1234567890'),(7,'ABC','mr','duy','do','fds','it','vn','zeus261096@gmail.com','1234567890'),(8,'ABC','mr','duy','do','fds','it','vn','zeus261096@gmail.com','1234567890'),(9,'ABC','mr','duy','do','fds','it','vn','zeus261096@gmail.com','1234567890'),(10,'ABCD','mr','duy','do','fds','it','vn','zeus261096@gmail.com','0987654321');
/*!40000 ALTER TABLE `attendee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `award_category`
--

DROP TABLE IF EXISTS `award_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `award_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  `level` int(11) DEFAULT '1',
  `parent` int(11) DEFAULT '0',
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `award_category`
--

LOCK TABLES `award_category` WRITE;
/*!40000 ALTER TABLE `award_category` DISABLE KEYS */;
INSERT INTO `award_category` VALUES (1,'ICO',1,1,0,''),(2,'Notarization',1,1,0,''),(3,'Payment Solution',1,1,0,''),(4,'Mainnet Blockchain Platform',1,1,0,''),(5,'Influencer',1,1,0,''),(6,'Law Firm',1,1,0,''),(7,'Media/News/Social Media',1,1,0,''),(8,'Exchange',1,1,0,''),(9,'Social Impact',1,1,0,''),(10,'Book',1,1,0,''),(11,'Game',1,1,0,''),(12,'Artist',1,1,0,''),(13,'Startups',1,1,0,''),(14,'Leadership',1,1,0,''),(15,'Others',1,1,0,''),(16,'Enterprise Blockchain Platform',1,2,1,''),(17,'Game Platform/Service',1,2,1,''),(18,'AR/VR Platform/Service',1,2,1,''),(19,'IoT Platform/Service',1,2,1,''),(20,'Social Impact Platform/Service',1,2,1,''),(21,'Payment Platform/Service',1,2,1,''),(22,'Healthcare Platform/Service',1,2,1,''),(23,'Real Estate/Service',1,2,1,''),(24,'Notarization Platform/Service',1,2,1,''),(25,'Airdrop Platform/Service',1,2,1,''),(26,'Social Media/Media Platform/Service',1,2,1,''),(27,'Others',1,2,1,''),(28,'Asia',1,2,2,''),(29,'Middle East',1,2,2,''),(30,'Europe',1,2,2,''),(31,'North America',1,2,2,''),(32,'South America',1,2,2,''),(33,'Oceania',1,2,2,''),(34,'Africa',1,2,2,''),(35,'Asia',1,2,3,''),(36,'Middle East',1,2,3,''),(37,'Europe',1,2,3,''),(38,'North America',1,2,3,''),(39,'South America',1,2,3,''),(40,'Oceania',1,2,3,''),(41,'Africa',1,2,3,''),(42,'Technical Supports',1,2,4,''),(43,'Marketing',1,2,4,''),(44,'Security',1,2,4,''),(45,'Versatility',1,2,4,''),(46,'Scalability',1,2,4,''),(47,'User-Friendly UI/UX',1,2,4,''),(48,'Asia',1,2,5,''),(49,'Middle East',1,2,5,''),(50,'Europe',1,2,5,''),(51,'North America',1,2,5,''),(52,'South America',1,2,5,''),(53,'Oceania',1,2,5,''),(54,'Africa',1,2,5,''),(55,'Youtuber',1,3,48,''),(56,'Community',1,3,48,''),(57,'Reporter',1,3,48,''),(58,'Crypto Columnist/Journalist',1,3,48,''),(59,'Youtuber',1,3,49,''),(60,'Community',1,3,49,''),(61,'Reporter',1,3,49,''),(62,'Crypto Columnist/Journalist',1,3,49,''),(63,'Youtuber',1,3,50,''),(64,'Community',1,3,50,''),(65,'Reporter',1,3,50,''),(66,'Crypto Columnist/Journalist',1,3,50,''),(67,'Youtuber',1,3,51,''),(68,'Community',1,3,51,''),(69,'Reporter',1,3,51,''),(70,'Crypto Columnist/Journalist',1,3,51,''),(71,'Youtuber',1,3,52,''),(72,'Community',1,3,52,''),(73,'Reporter',1,3,52,''),(74,'Crypto Columnist/Journalist',1,3,52,''),(75,'Youtuber',1,3,53,''),(76,'Community',1,3,53,''),(77,'Reporter',1,3,53,''),(78,'Crypto Columnist/Journalist',1,3,53,''),(79,'Youtuber',1,3,54,''),(80,'Community',1,3,54,''),(81,'Reporter',1,3,54,''),(82,'Crypto Columnist/Journalist',1,3,54,''),(83,'Asia',1,2,6,''),(84,'Middle East',1,2,6,''),(85,'Europe',1,2,6,''),(86,'North America',1,2,6,''),(87,'South America',1,2,6,''),(88,'Oceania',1,2,6,''),(89,'Africa',1,2,6,''),(90,'Asia',1,2,7,''),(91,'Middle East',1,2,7,''),(92,'Europe',1,2,7,''),(93,'North America',1,2,7,''),(94,'South America',1,2,7,''),(95,'Oceania',1,2,7,''),(96,'Africa',1,2,7,''),(97,'Centralized',1,2,8,''),(98,'Decentralized',1,2,8,''),(99,'Security',1,2,8,''),(100,'Customer Supports',1,2,8,''),(101,'Blockchain For Good Society',1,2,9,''),(102,'Smart Donation',1,2,9,''),(103,'Energy Saving',1,2,9,''),(104,'Financial Services',1,2,9,''),(105,'Economics',1,2,10,''),(106,'Anthropology/Sociology',1,2,10,''),(107,'Technology',1,2,10,''),(108,'VR/AR',1,2,11,''),(109,'Mobile',1,2,11,''),(110,'Desktop',1,2,11,''),(111,'Location-Based',1,2,11,''),(112,'Computer Graphic Artist',1,2,12,''),(113,'Musician',1,2,12,''),(114,'Painter',1,2,12,''),(115,'Blockchain Platform',1,2,13,''),(116,'Game',1,2,13,''),(117,'AR/VR',1,2,13,''),(118,'SI Company',1,2,13,''),(119,'IoT',1,2,13,''),(120,'Social Impact',1,2,13,''),(121,'Notarization',1,2,13,''),(122,'Media/Social Media',1,2,13,''),(123,'Payment Solution',1,2,13,''),(124,'Healthcare',1,2,13,''),(125,'Real Estate',1,2,13,''),(126,'Airdrop Platform',1,2,13,''),(127,'AI (Artificial Intelligence)',1,2,13,''),(128,'Others',1,2,13,'');
/*!40000 ALTER TABLE `award_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invitation_code`
--

DROP TABLE IF EXISTS `invitation_code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invitation_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `used` tinyint(4) DEFAULT '0',
  `receiver_email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invitation_code`
--

LOCK TABLES `invitation_code` WRITE;
/*!40000 ALTER TABLE `invitation_code` DISABLE KEYS */;
INSERT INTO `invitation_code` VALUES (1,'ABC',1,'duyd@gmail.com'),(2,'ABCD',1,'test@gmail.com'),(3,'ABCDE',0,'test@gmail.com');
/*!40000 ALTER TABLE `invitation_code` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `judges`
--

DROP TABLE IF EXISTS `judges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `judges` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `job_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `link_1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `link_2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `link_3` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `judges`
--

LOCK TABLES `judges` WRITE;
/*!40000 ALTER TABLE `judges` DISABLE KEYS */;
/*!40000 ALTER TABLE `judges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nominator`
--

DROP TABLE IF EXISTS `nominator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nominator` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nominator`
--

LOCK TABLES `nominator` WRITE;
/*!40000 ALTER TABLE `nominator` DISABLE KEYS */;
INSERT INTO `nominator` VALUES (1,'821062770737','Lisa','Kim','lisak@purpleswan.io'),(2,'0987654321','duy','do','zeus261096@gmail.com'),(3,'dd','duy','do','macminhtung1993@gmail.com'),(4,'000-000-000','Alexandara','Jeong','lexyj@purpleswan.io'),(5,'010-000-0000','Lexy','Jeong','lexyj@purpleswan.io'),(6,'010-9145-1088','bongseok','Kang','kusakang82@naver.com'),(7,'4','test','do','zeus261096@gmail.com');
/*!40000 ALTER TABLE `nominator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nominee`
--

DROP TABLE IF EXISTS `nominee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nominee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_nominator` int(11) DEFAULT NULL,
  `fk_award_category` int(11) DEFAULT NULL,
  `about_speaker` mediumtext COLLATE utf8_unicode_ci,
  `links_media` mediumtext COLLATE utf8_unicode_ci,
  `links_articles` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_know` tinyint(4) DEFAULT NULL,
  `time` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `self` tinyint(4) DEFAULT '0',
  `prefix` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `company_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `company_website` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `job_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nationality` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `other_category` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_nominator` (`fk_nominator`),
  KEY `fk_award_category` (`fk_award_category`),
  CONSTRAINT `nominee_ibfk_1` FOREIGN KEY (`fk_nominator`) REFERENCES `nominator` (`id`),
  CONSTRAINT `nominee_ibfk_2` FOREIGN KEY (`fk_award_category`) REFERENCES `award_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nominee`
--

LOCK TABLES `nominee` WRITE;
/*!40000 ALTER TABLE `nominee` DISABLE KEYS */;
INSERT INTO `nominee` VALUES (1,1,115,'Because Délegacy is a great project. ','www.purpleswan.io ','','Lisa Kim.png',1,'1565029152616',1,'Ms','Lisa','Kim','Purple Swan','www.purpleswan.io ','Project Manager','821062770737','lisak@purpleswan.io','south korean','null'),(2,2,109,'Test','test','','TokenPost logo.png',1,'1565075059363',1,'Mr','duy','do','fds','fds','it','0987654321','zeus261096@gmail.com','vietnamese','null'),(3,3,21,'f','f','','images.png',0,'1565077048659',1,'Ms','duy','do','1','4','f','dd','macminhtung1993@gmail.com','barbadian','null'),(4,2,113,'f','f','','Screenshot from 2019-07-31 11-42-54.png',0,'1565142623580',1,'Ms','duy','do','f','4','3','0987654321','zeus261096@gmail.com','barbadian','null'),(5,4,98,'sfsadf \r\ntest','www.purpleswan.io','','emblem25.png',1,'1565143184835',1,'Ms','lexy','jeong','purpleswan','purpleswan.io','purpleswan','000-000-000','lexyj@purpleswan.io','spanish','null'),(6,2,29,'a','fff','','event.jpg',0,'1565165273668',1,'Mr','duyngoc','do','fds','fds','it','0987654321','zeus261096@gmail.com','bahraini','null'),(7,5,90,'Because.... ','https://www.youtube.com/watch?v=r3qHWIyF8G4,http://m.ceomagazine.co.kr/news/articleView.html?idxno=3202','','Sonny headshot.jpg',1,'1565169949207',0,'Mr','Sonny','Kwon','Publish','publishprotocol.io','CEO','010-000-0000','sonnyk@purpleswan.io','south korean','null'),(8,6,99,'호화폐 거래소 게이트아이오(gate.io)가 주최하고 바이텀,테조스,네뷸러스와 같은 다양한 블록체인 프로젝트들이 파트너로 참여하고 있는 오프라인 밋업은 블록체인 기술과 토큰이코노미 및 블록체인 생태계의 개념을 보다 쉽게 이해하고 블록체인에 대한 기본적인 지식을 대중화하려는 목적으로 만들어졌다. 오프라인 밋업을 이끌고 있는 저스틴강(Justin Kang)은 블록체인의 발전과정을 대표적인 암호화폐를 사례로 시기별, 특징별로 풀어가면서 4차산업과 관련된 다양한 주제와 더불어 심도있는 내용을 전달하고 있다.\n\n2018년 12월비트코인 / 암호화폐의 성장가능성 - http://www.ekn.kr/news/article.html?no=404880\n2019년 1월 이더리움 / 토큰화와 STO - https://www.gate.io/article/16772\n1월 패널:China Blockchain Expert / 블록체인 거버넌스 - https://www.onoffmix.com/event/165874\n2월 리플 / 스테이블코인과 거버넌스 - http://www.futurekorea.co.kr/news/articleView.html?idxno=115498\n3월 게스트:바이텀 / 라이트코인 / 지급결제시장 - http://bigdata.getnews.co.kr/view.php?ud=201903251409238887992c130dbe_23\n4월 게스트:무비블록 / 대시vs모네로 / 익명화폐와 신원인증, 프라이버시 - http://www.ekn.kr/news/article.html?no=429379\n5월 게스트:네뷸러스 / 비트코인 파생상품과 ETF / 온체인 거버넌스 중 자산의 역할 - http://blocktimestv.com/news/view.php?idx=13659\n5월 서울대학교 강연 / 성공적인 블록체인 기업가가 되기 위한 7가지 중요한 팁(7 Great Tips for Your Success as a Blockchain Entrepreneur) - http://beyondpost.getnews.co.kr/view.php?ud=201905271142517469992c130dbe_30\n6월 게스트:테조스,DREP / 비트코인캐시 하드포크 / 금융과 핀테크, 블록체인 - http://newsbrite.net/sub_read.html?uid=99474&section=sc8\n7월 게스트:아이콘 / 네오 vs 퀀텀 / 블록체인과 부동산 - 프롭테크3.0 - http://betanews.heraldcorp.com:8080/article/1029031.html\n8월 게스트:림포 / IOTA / 사물인터넷과 스마트시티 - https://kr.thenodist.com/articles/37105','https://youtu.be/EQk3dn3KVWM','','WeChat Image_20190704201920.jpg',1,'1565768681081',1,'Mr','Justin','Kang','Gate.io Korea','gate.io','Business Manager','010-9145-1088','kbs088k@gmail.com','south korean','null'),(9,7,29,'f','ff','','sunrise-1756274_192024.jpg',1,'1565943586743',1,'Mr','test','do','f','f','f','4','zeus261096@gmail.com','Bahraini','null');
/*!40000 ALTER TABLE `nominee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partners`
--

DROP TABLE IF EXISTS `partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `company_website` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  `ordinal` int(11) DEFAULT '999',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partners`
--

LOCK TABLES `partners` WRITE;
/*!40000 ALTER TABLE `partners` DISABLE KEYS */;
INSERT INTO `partners` VALUES (3,'Coinreaders','image (1).png',NULL,1,999),(4,'HKB News','image (4).png',NULL,1,999),(5,'NT Block','image (2).png',NULL,1,999),(6,'B&Y','image (3).png',NULL,1,999),(7,'한국블록체인학회','한국블록체인학회.png',NULL,1,999),(9,'Délegacy','Asset 1@3x.png',NULL,1,999),(10,'Publish','publish1.png',NULL,1,999);
/*!40000 ALTER TABLE `partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order` int(11) DEFAULT NULL,
  `active` tinyint(4) DEFAULT '1',
  `event` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `speaker` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `time` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sponsor`
--

DROP TABLE IF EXISTS `sponsor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sponsor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `full_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `website_address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telegram_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `job_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `timestamp` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `payment` tinyint(4) DEFAULT '0',
  `status` tinyint(4) DEFAULT '0',
  `type` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sponsor`
--

LOCK TABLES `sponsor` WRITE;
/*!40000 ALTER TABLE `sponsor` DISABLE KEYS */;
/*!40000 ALTER TABLE `sponsor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-20  9:22:43
