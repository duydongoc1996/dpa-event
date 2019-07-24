-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: event
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.04.1

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
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'test','$2b$10$zhY9kaO3nMCmOyibO.gIPuwtTdQy7LOXKhiQNbrGNCsKF.lLhrbse','testtest'),(2,'test1','$2b$10$t9gDxeyTSj9htx7t9VN0XeMej8XWF.XhRw/7lD0YTQpk1V0IwF/8W','testtest'),(3,'test12','$2b$10$.PhodVEwzusdkvvJ22SkiO6hPOGR7bv1q0ljof5Db5ooWDDgRv1vu','testtest'),(4,'test1223','$2b$10$f921bYBYCqcy.RB3PPjRjeZq017hLkLOWysZ8VZlx1yrRBuNp5yRe','testtest');
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
  `code` varchar(255) DEFAULT NULL,
  `prefix` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
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
  `name` varchar(255) NOT NULL,
  `status` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `award_category`
--

LOCK TABLES `award_category` WRITE;
/*!40000 ALTER TABLE `award_category` DISABLE KEYS */;
INSERT INTO `award_category` VALUES (1,'Test',1),(4,'Mathematics',1),(12,'Geography',1),(13,'War',1),(14,'Physics',1),(15,'Math',1);
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
  `code` varchar(255) DEFAULT NULL,
  `used` tinyint(4) DEFAULT '0',
  `receiver_email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
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
  `full_name` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `link_1` varchar(255) DEFAULT NULL,
  `link_2` varchar(255) DEFAULT NULL,
  `link_3` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
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
  `phone` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nominator`
--

LOCK TABLES `nominator` WRITE;
/*!40000 ALTER TABLE `nominator` DISABLE KEYS */;
INSERT INTO `nominator` VALUES (1,'0987654321','duy','do','du@gmail'),(3,'0987654322','duy','do','du@gmail'),(4,'+84362689683','songoku','kakalot','son@gmail.com'),(5,'4','duy','do','4'),(6,'5','5','5','5');
/*!40000 ALTER TABLE `nominator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partners`
--

DROP TABLE IF EXISTS `partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `company_website` varchar(255) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
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
-- Table structure for table `sponsor`
--

DROP TABLE IF EXISTS `sponsor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sponsor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `website_address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telegram_id` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `timestamp` varchar(255) DEFAULT NULL,
  `payment` tinyint(4) DEFAULT '0',
  `status` tinyint(4) DEFAULT '0',
  `type` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sponsor`
--

LOCK TABLES `sponsor` WRITE;
/*!40000 ALTER TABLE `sponsor` DISABLE KEYS */;
INSERT INTO `sponsor` VALUES (1,'a','duy','fds','duydo@','876543','it','none','dafdfjl','1561953618355',1,1,0),(2,'a','duy','fds','duydo@','876543','it','none','dafdfjl','1561953676422',0,0,0),(3,'a','duy','fds','duydo@','876543','it','none','dafdfjl','1562037120064',0,0,1),(4,'a','duy','fds','duydo@','876543','it','none','dafdfjl','1562037393107',0,0,1),(5,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','Chibi-Yasuo-Lulu-by-bibico-League-of-Legends-Artwork-Wallpaper-lol.jpg','1562137517065',0,0,1),(6,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','Chibi-Yasuo-Lulu-by-bibico-League-of-Legends-Artwork-Wallpaper-lol1.jpg','1562137592607',0,0,1),(7,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','Chibi-Yasuo-Lulu-by-bibico-League-of-Legends-Artwork-Wallpaper-lol2.jpg','1562137607978',0,0,1),(8,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','Chibi-Yasuo-Lulu-by-bibico-League-of-Legends-Artwork-Wallpaper-lol3.jpg','1562137611084',0,0,1),(9,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','images8.png','1562302052390',0,0,1),(10,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','images9.png','1562302749675',0,0,1),(11,'fds','duydo','fdssoft.com','duy.do@gmail.com','123123232','it','none','images4.png','1562902632234',0,0,1);
/*!40000 ALTER TABLE `sponsor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vote`
--

DROP TABLE IF EXISTS `vote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_nominator` int(11) DEFAULT NULL,
  `fk_award_category` int(11) DEFAULT NULL,
  `about_speaker` text,
  `links_media` text,
  `links_articles` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `is_know` tinyint(4) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `self` tinyint(4) DEFAULT '0',
  `prefix` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `company_website` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_nominator` (`fk_nominator`),
  KEY `fk_award_category` (`fk_award_category`),
  CONSTRAINT `vote_ibfk_1` FOREIGN KEY (`fk_nominator`) REFERENCES `nominator` (`id`),
  CONSTRAINT `vote_ibfk_2` FOREIGN KEY (`fk_award_category`) REFERENCES `award_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vote`
--

LOCK TABLES `vote` WRITE;
/*!40000 ALTER TABLE `vote` DISABLE KEYS */;
INSERT INTO `vote` VALUES (1,3,12,'nothing','abc.com,213123.org','test.com,test1.com','logo',0,'1562646006596',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,3,12,'nothing','abc.com,213123.org','test.com,test1.com','logo',0,'1562646018909',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,4,13,'djafl afkldjf dsdkjfla fksdjfldfj sdfalfklsdjf','link media','link article','test',0,'1562820332088',0,'mr','cadic','kaaklot','sayan','aaa.com','warior','0987654321','cadic@gmail.com','sayan'),(4,4,13,'djafl afkldjf dsdkjfla fksdjfldfj sdfalfklsdjf','link media','link article','Chibi-Yasuo-Lulu-by-bibico-League-of-Legends-Artwork-Wallpaper-lol3.jpg',0,'1563936418332',0,'mr','cadic','kaaklot','sayan','aaa.com','warior','0987654321','cadic@gmail.com','sayan'),(5,4,13,'djafl afkldjf dsdkjfla fksdjfldfj sdfalfklsdjf','link media','link article','Chibi-Yasuo-Lulu-by-bibico-League-of-Legends-Artwork-Wallpaper-lol4.jpg',0,'1563942948543',0,'mr','cadic','kaaklot','sayan','aaa.com','warior','0987654321','cadic@gmail.com','sayan'),(6,4,13,'djafl afkldjf dsdkjfla fksdjfldfj sdfalfklsdjf','link media','link article','Chibi-Yasuo-Lulu-by-bibico-League-of-Legends-Artwork-Wallpaper-lol5.jpg',0,'1563942975874',0,'mr','cadic','kaaklot','sayan','aaa.com','warior','0987654321','cadic@gmail.com','sayan'),(7,5,15,'4','1','','Webp.net-resizeimage (5)1.png',0,'1563950387084',1,'Mrs','4','4','4','4','4','4','4','korea'),(8,5,15,'4','1,f,5','','kisspng-antares-wood-floors-icon-down-arrow-png-image-5a756e2dd52065.274021311517645357873.png',0,'1563950491795',1,'Mrs','4','4','4','4','4','4','4','korea'),(9,5,15,'4','1,f,5,ff','','kisspng-antares-wood-floors-icon-down-arrow-png-image-5a756e2dd52065.2740213115176453578731.png',0,'1563951186721',1,'Mrs','4','4','4','4','4','4','4','korea'),(10,6,15,'5','5,5','','Webp.net-resizeimage (6).png',0,'1563951290895',1,'Mr','5','5','5','5','5','5','5','korea');
/*!40000 ALTER TABLE `vote` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-24 16:05:49
