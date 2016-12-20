package org.scut.mychart.model;

public class IndustryModel {

    private Integer  person_num;
    private String   sex;
    private Integer  year;
    private String   age;
    private String   industry_code;
    private Double  cardinality;

    public void setIndustry_code(String industry_code) {
        this.industry_code = industry_code;
    }

    public String getIndustry_code() {
        return industry_code;
    }

    public Integer getPerson_num() {
        return person_num;
    }

    public String getSex() {
        return sex;
    }

    public Integer getYear() {
        return year;
    }

    public String getAge() {
        return age;
    }

    public Double getCardinality() {
        return cardinality;
    }

    public void setPerson_num(Integer person_num) {
        this.person_num = person_num;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public void setCardinality(Double cardinality) {
        this.cardinality = cardinality;
    }

}
