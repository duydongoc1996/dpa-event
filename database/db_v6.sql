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
INSERT INTO `judges` VALUES (4,'duy do','it','test.net','test.org','test.com','Chibi-Yasuo-Lulu-by-bibico-League-of-Legends-Artwork-Wallpaper-lol1.jpg',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nominator`
--

LOCK TABLES `nominator` WRITE;
/*!40000 ALTER TABLE `nominator` DISABLE KEYS */;
INSERT INTO `nominator` VALUES (1,'f','a','f','f'),(2,'098765432','duy','do','zeus261096@gmail.com'),(3,'dd','1','do','zeus261096@gmail.com'),(4,'1','duy','1','zeus261096@gmail.com');
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nominee`
--

LOCK TABLES `nominee` WRITE;
/*!40000 ALTER TABLE `nominee` DISABLE KEYS */;
INSERT INTO `nominee` VALUES (1,1,112,'ff','ff','','Layer 27.png',1,'1564980641108',1,'Ms','ab','f','f','f','3','f','f','bahamian','null'),(2,1,112,'ff','ff','','Layer 271.png',1,'1564980684544',1,'Ms','acc','f','f','f','3','f','f','bahamian','null'),(3,2,109,'f','f','','PUBLISH logo.png',0,'1565076012726',1,'Mr','duy','do','f','f','f','098765432','zeus261096@gmail.com','bangladeshi','null'),(4,3,103,'f','f','','delegacy logo_03.png',1,'1565076494289',1,'Ms','1','do','f','f','f','dd','dd','bahamian','null'),(5,3,109,'f','f','','PURPLE SWAN LOGO_purple.png',0,'1565076543403',1,'Mr','5','do','f','f','f','dd','zeus261096@gmail.com','bahraini','null'),(6,3,36,'f','f','','PURPLE SWAN LOGO_purple1.png',0,'1565076639289',1,'Mr','duy','do','f','f','f','dd','zeus261096@gmail.com','bangladeshi','null'),(7,4,127,'f','f','','Kchain logo.png',0,'1565076798063',1,'Ms','duy','1','f','f','f','1','zeus261096@gmail.com','bangladeshi','null'),(8,4,105,'후보 지명 및 등록','f','','Screenshot from 2019-07-31 11-42-54.png',0,'1565145591117',1,'Mr','1','1','f','f','f','1','dd','bahraini','null');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partners`
--

LOCK TABLES `partners` WRITE;
/*!40000 ALTER TABLE `partners` DISABLE KEYS */;
INSERT INTO `partners` VALUES (2,'fds','logo','google.com',1);
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
INSERT INTO `sponsor` VALUES (1,'a','duy','fds','duydo@','876543','it','none','dafdfjl','1561953618355',1,1,0),(2,'a','duy','fds','duydo@','876543','it','none','dafdfjl','1561953676422',0,0,0),(3,'a','duy','fds','duydo@','876543','it','none','dafdfjl','1562037120064',0,0,1),(4,'a','duy','fds','duydo@','876543','it','none','dafdfjl','1562037393107',0,0,1),(5,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','Chibi-Yasuo-Lulu-by-bibico-League-of-Legends-Artwork-Wallpaper-lol.jpg','1562137517065',0,0,1),(6,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','Chibi-Yasuo-Lulu-by-bibico-League-of-Legends-Artwork-Wallpaper-lol1.jpg','1562137592607',0,0,1),(7,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','Chibi-Yasuo-Lulu-by-bibico-League-of-Legends-Artwork-Wallpaper-lol2.jpg','1562137607978',0,0,1),(8,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','Chibi-Yasuo-Lulu-by-bibico-League-of-Legends-Artwork-Wallpaper-lol3.jpg','1562137611084',0,0,1),(9,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','images8.png','1562302052390',0,0,1),(10,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','images9.png','1562302749675',0,0,1),(11,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','images4.png','1562902632234',0,0,1);
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

-- Dump completed on 2019-08-08 13:54:36
